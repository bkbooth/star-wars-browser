<template>
  <div>
    <div v-if="film">
      <h1><c-icon category="films"/> Episode {{ film.episodeId }} - {{ film.title }}</h1>
      <pre>{{ film | json }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    film() {
      return this.$store.getters['films/getItem'](this.$route.params.filmSlug)
    },
    ...mapState('films', ['loading']),
  },
  created() {
    this.$store.dispatch('films/loadOne', this.$route.params.filmSlug)
  },
}
</script>
