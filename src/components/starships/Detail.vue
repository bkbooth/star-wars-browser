<template>
  <div>
    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><c-icon category="starships"/> {{ starship.name }}</h1>
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
