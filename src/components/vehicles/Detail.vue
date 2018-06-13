<template>
  <div>
    <p><router-link to="/vehicles">« Back to Vehicles</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1>{{ vehicle.name }}</h1>
      <pre>{{ vehicle | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getItem'](this.$route.params.vehicleId)
    },
    ...mapState('vehicles', ['loading']),
  },
  created() {
    this.$store.dispatch('vehicles/loadOne', this.$route.params.vehicleId)
  },
}
</script>
