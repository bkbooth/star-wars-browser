<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="planets" color="blue-dark"/>
        {{ planet.name }}
      </h1>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="planet">
        <pre>{{ planet }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    planet() {
      return this.$store.getters['planets/getItem'](this.$route.params.slug)
    },
    ...mapState('planets', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.slug)
  },
}
</script>
