<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="vehicles" color="blue-dark" class="text-2xl"/>
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">{{ vehicle.model }}</h1>
          <p class="font-light uppercase tracking-wide m-0">{{ vehicle.manufacturer }}</p>
        </div>
      </div>
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
