<template>
  <div>
    <h1>Vehicles</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
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
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('vehicles', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('vehicles/loadAll')
  },
}
</script>
