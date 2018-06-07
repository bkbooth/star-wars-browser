<template>
  <div>
    <h1>Planets</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="(planet, id) in planets" :key="id">
          <router-link :to="`planets/${id}`">{{ planet.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('planets', {
      planets: 'data',
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('planets', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('planets/loadAll')
  },
}
</script>
