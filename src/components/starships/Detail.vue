<template>
  <div>
    <p><router-link to="/starships">« Back to Starships</router-link></p>

    <div v-if="starship">
      <h1>{{ starship.name }}</h1>
    </div>
    <div v-else>
      <p>Starship not available yet. Loading? {{ loading }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    starship() {
      return this.$store.getters['starships/getItem'](this.$route.params.starshipId)
    },
    ...mapState('starships', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('starships/loadOne', this.$route.params.starshipId)
  },
}
</script>
