<template>
  <nav>
    <div class="container mx-auto text-grey-darker">
      <span v-if="routeName === 'home'">
        <fa-icon :icon="['far', 'home']" transform="shrink-3" /> Home
      </span>
      <router-link v-else to="/">
        <fa-icon :icon="['far', 'home']" transform="shrink-3" /> Home
      </router-link>

      <span v-if="categoryName">
        >
        <span v-if="isList">
          <c-icon :category="categoryName" size="sm" transform="shrink-3" />
          {{ categoryName | capitalize }}
        </span>
        <router-link v-else :to="{ name: `${categoryName}.list` }">
          <c-icon :category="categoryName" size="sm" transform="shrink-3" />
          {{ categoryName | capitalize }}
        </router-link>

        <span v-if="isDetail">
          > {{ detailName }}
        </span>
      </span>

      <span v-if="routeName === 'not-found'">
        > Page Not Found
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    routeName() {
      return this.$route.name || ''
    },
    categoryName() {
      let [category, view] = this.routeName.split('.')
      return (view && category) || ''
    },
    detailName() {
      if (this.isDetail) {
        let getter = `${this.categoryName}/getItem`
        let slug = this.$route.params['slug']
        let detail = this.$store.getters[getter](slug)
        if (detail) return detail.name || detail.title
      }
      return '… … …'
    },
    isList() {
      let [_category, view] = this.routeName.split('.')
      return view === 'list'
    },
    isDetail() {
      let [_category, view] = this.routeName.split('.')
      return view === 'detail'
    },
  },
}
</script>
