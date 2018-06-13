<template>
  <div>
    <h1>Films</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="(film, id) in films" :key="id">
          <router-link :to="`films/${id}`">Episode {{ film.episodeId }} - {{ film.title }}</router-link>
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
      loading: 'loading',
    }),
    ...mapGetters('films', ['count']),
  },
  created() {
    this.$store.dispatch('films/loadAll')
  },
}
</script>
