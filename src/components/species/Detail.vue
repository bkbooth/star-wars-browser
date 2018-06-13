<template>
  <div>
    <div v-if="species">
      <h1><c-icon category="species"/> {{ species.name }}</h1>
      <pre>{{ species | json }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
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
