<template>
  <div>
    <h1>Vehicles</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="(vehicle, id) in vehicles" :key="id">
          <router-link :to="`vehicles/${id}`">{{ vehicle.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('vehicles', {
      vehicles: 'data',
      loading: 'loading',
    }),
    ...mapGetters('vehicles', ['count']),
  },
  created() {
    this.$store.dispatch('vehicles/loadAll')
  },
}
</script>
