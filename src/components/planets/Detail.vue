<template>
  <div>
    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><c-icon category="planets"/> {{ planet.name }}</h1>
      <pre>{{ planet | json }}</pre>
    </div>
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
