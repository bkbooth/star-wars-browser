<template>
  <div>
    <p><router-link to="/species">« Back to Species</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1>{{ species.name }}</h1>
      <pre>{{ species | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    species() {
      return this.$store.getters['species/getItem'](this.$route.params.speciesSlug)
    },
    ...mapState('species', ['loading']),
  },
  created() {
    this.$store.dispatch('species/loadOne', this.$route.params.speciesSlug)
  },
}
</script>
