<template>
  <div>
    <p><router-link to="/">« Back to Categories</router-link></p>

    <h1><fa-icon icon="car"/> Vehicles</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="vehicle in vehicles" :key="vehicle.id">
          <router-link :to="`vehicles/${vehicle.slug}`">{{ vehicle.name }}</router-link>
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
