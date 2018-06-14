<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="vehicles"/> Vehicles</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count">
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="vehicle in vehicles" :key="vehicle.id">
          <router-link :to="`vehicles/${vehicle.slug}`">{{ vehicle.name }}</router-link>
        </li>
      </ul>
    </div>

    <loading-spinner v-if="loading"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('vehicles', {
      vehicles: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('vehicles', ['count']),
  },
  created() {
    this.$store.dispatch('vehicles/loadAll')
  },
}
</script>
