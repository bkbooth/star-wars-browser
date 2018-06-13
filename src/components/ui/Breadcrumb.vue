<template>
  <div class="breadcrumb">
    <span v-if="isHome">
      <fa-icon icon="home" size="xs"/> Home
    </span>
    <router-link v-else to="/">
      <fa-icon icon="home" size="xs"/> Home
    </router-link>

    <span v-if="categoryName">
      ▸
      <span v-if="isList">
        <c-icon :category="categoryName" size="xs"/>
        {{ categoryName | capitalize }}
      </span>
      <router-link v-else :to="{ name: `${categoryName}.list` }">
        <c-icon :category="categoryName" size="xs"/>
        {{ categoryName | capitalize }}
      </router-link>
    </span>

    <span v-if="isDetail">
      ▸ {{ detailName }}
    </span>
  </div>
</template>

<script>
const SLUGS = {
  films: 'filmSlug',
  planets: 'planetSlug',
  species: 'speciesSlug',
  people: 'personSlug',
  starships: 'starshipSlug',
  vehicles: 'vehicleSlug',
}

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
        let slugName = SLUGS[this.categoryName]
        let slug = this.$route.params[slugName]
        let detail = this.$store.getters[getter](slug)
        if (detail) return detail.name || detail.title
      }
      return ''
    },
    isHome() {
      return this.routeName === 'home'
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

<style scoped>
* { vertical-align: inherit; }
a { text-decoration: none; }
.breadcrumb { font-size: .9rem; }
</style>
