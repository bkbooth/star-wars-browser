<template>
  <div>
    <h1>Films</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="(film, id) in films" :key="id">
          <router-link :to="`films/${id}`">Episode {{ film.episode_id }} - {{ film.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('films', {
      films: 'data',
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('films', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('films/loadAll')
  },
}
</script>
