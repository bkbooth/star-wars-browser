<template>
  <div>
    <p><router-link to="/vehicles">« Back to Vehicles</router-link></p>

    <div v-if="vehicle">
      <h1>{{ vehicle.name }}</h1>
      <pre>{{ vehicle | json }}</pre>
    </div>
    <div v-else>
      <p>Vehicle not available yet. Loading? {{ loading }}</p>
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
    ...mapState('vehicles', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('vehicles/loadOne', this.$route.params.vehicleId)
  },
}
</script>
