<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="vehicle">
      <h1 class="font-starjedi"><c-icon category="vehicles"/> {{ vehicle.name }}</h1>
      <pre>{{ vehicle }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getItem'](this.$route.params.slug)
    },
    ...mapState('vehicles', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('vehicles/loadOne', this.$route.params.slug)
  },
}
</script>
