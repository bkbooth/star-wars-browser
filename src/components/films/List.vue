<template>
  <div>
    <h1><fa-icon icon="film"/> Films</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="film in films" :key="film.id">
          <router-link :to="`films/${film.slug}`">Episode {{ film.episodeId }} - {{ film.title }}</router-link>
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
