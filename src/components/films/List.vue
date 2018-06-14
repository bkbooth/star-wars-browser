<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="films"/> Films</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count">
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="film in films" :key="film.id">
          <router-link :to="`films/${film.slug}`">Episode {{ film.episodeId }} - {{ film.title }}</router-link>
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
    ...mapState('films', {
      films: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('films', ['count']),
  },
  created() {
    this.$store.dispatch('films/loadAll')
  },
}
</script>
