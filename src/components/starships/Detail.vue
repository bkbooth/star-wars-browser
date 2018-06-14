<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="starship">
      <h1><c-icon category="starships"/> {{ starship.name }}</h1>
      <pre>{{ starship | json }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    starship() {
      return this.$store.getters['starships/getItem'](this.$route.params.starshipSlug)
    },
    ...mapState('starships', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('starships/loadOne', this.$route.params.starshipSlug)
  },
}
</script>
