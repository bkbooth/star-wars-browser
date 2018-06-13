<template>
  <div>
    <p><router-link to="/films">« Back to Films</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1>Episode {{ film.episodeId }} - {{ film.title }}</h1>
      <pre>{{ film | json }}</pre>
    </div>
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
