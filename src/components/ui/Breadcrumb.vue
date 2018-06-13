<template>
  <div>
    <span v-if="isHome">
      <fa-icon icon="home" size="xs"/> Home
    </span>
    <router-link v-else to="/">
      <fa-icon icon="home" size="xs"/> Home
    </router-link>

    <span v-if="category">
      ▸
      <span v-if="isList">
        <c-icon :category="category" size="xs"/>
        {{ category | capitalize }}
      </span>
      <router-link v-else :to="{ name: `${category}.list` }">
        <c-icon :category="category" size="xs"/>
        {{ category | capitalize }}
      </router-link>
    </span>

    <span v-if="isDetail">
      ▸ Detail
    </span>
  </div>
</template>

<script>
import capitalize from 'lodash/capitalize'

export default {
  name: 'Breadcrumb',
  filters: {
    capitalize,
  },
  computed: {
    routeName() {
      return this.$route.name || ''
    },
    category() {
      let [category, view] = this.routeName.split('.')
      return (view && category) || ''
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
</style>
