<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="vehicles" color="blue-dark"/>
        {{ vehicle.name }}
      </h1>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="vehicle">
        <pre>{{ vehicle }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
    </template>
  </page-wrapper>
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
