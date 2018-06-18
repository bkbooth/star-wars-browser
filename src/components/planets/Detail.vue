<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="planet">
      <h1 class="font-starjedi"><c-icon category="planets"/> {{ planet.name }}</h1>
      <pre>{{ planet }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    planet() {
      return this.$store.getters['planets/getItem'](this.$route.params.slug)
    },
    ...mapState('planets', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.slug)
  },
}
</script>
