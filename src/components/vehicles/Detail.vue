<template>
  <div>
    <p><router-link to="/vehicles">« Back to Vehicles</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><fa-icon icon="car"/> {{ vehicle.name }}</h1>
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
