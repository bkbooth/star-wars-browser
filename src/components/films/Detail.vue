<template>
  <div>
    <p><router-link to="/films">« Back to Films</router-link></p>

    <div v-if="film">
      <h1>Episode {{ film.episode_id }} - {{ film.title }}</h1>
      <pre>{{ film | json }}</pre>
    </div>
    <div v-else>
      <p>Film not available yet. Loading? {{ loading }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    film() {
      return this.$store.getters['films/getItem'](this.$route.params.filmId)
    },
    ...mapState('films', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('films/loadOne', this.$route.params.filmId)
  },
}
</script>
