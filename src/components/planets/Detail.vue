<template>
  <div>
    <div v-if="planet">
      <h1><c-icon category="planets"/> {{ planet.name }}</h1>
      <pre>{{ planet | json }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    planet() {
      return this.$store.getters['planets/getItem'](this.$route.params.planetSlug)
    },
    ...mapState('planets', ['loading']),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.planetSlug)
  },
}
</script>
