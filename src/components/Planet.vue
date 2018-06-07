<template>
  <div>
    <p><router-link to="/planets">« Back to Planets</router-link></p>

    <div v-if="planet">
      <h1>{{ planet.name }}</h1>
    </div>
    <div v-else>
      <p>Planet not available yet. Loading? {{ loading }}</p>
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
    ...mapState('planets', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.planetId)
  },
}
</script>
