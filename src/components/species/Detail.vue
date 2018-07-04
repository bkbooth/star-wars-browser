<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="species" color="blue-dark"/>
        {{ species.name }}
      </h1>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="species">
        <pre>{{ species }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    species() {
      return this.$store.getters['species/getItem'](this.$route.params.slug)
    },
    ...mapState('species', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('species/loadOne', this.$route.params.slug)
  },
}
</script>
