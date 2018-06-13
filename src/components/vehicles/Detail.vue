<template>
  <div>
    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><c-icon category="vehicles"/> {{ vehicle.name }}</h1>
      <pre>{{ vehicle | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getItem'](this.$route.params.vehicleSlug)
    },
    ...mapState('vehicles', ['loading']),
  },
  created() {
    this.$store.dispatch('vehicles/loadOne', this.$route.params.vehicleSlug)
  },
}
</script>
