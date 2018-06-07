<template>
  <div>
    <h1>Starships</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="(starship, id) in starships" :key="id">
          <router-link :to="`starships/${id}`">{{ starship.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('starships', {
      starships: 'data',
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('starships', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('starships/loadAll')
  },
}
</script>
