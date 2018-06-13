<template>
  <div>
    <p><router-link to="/planets">« Back to Planets</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1>{{ planet.name }}</h1>
      <pre>{{ planet | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    planet() {
      return this.$store.getters['planets/getItem'](this.$route.params.planetId)
    },
    ...mapState('planets', ['loading']),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.planetId)
  },
}
</script>
