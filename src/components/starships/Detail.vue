<template>
  <div>
    <p><router-link to="/starships">« Back to Starships</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1>{{ starship.name }}</h1>
      <pre>{{ starship | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    starship() {
      return this.$store.getters['starships/getItem'](this.$route.params.starshipSlug)
    },
    ...mapState('starships', ['loading']),
  },
  created() {
    this.$store.dispatch('starships/loadOne', this.$route.params.starshipSlug)
  },
}
</script>
