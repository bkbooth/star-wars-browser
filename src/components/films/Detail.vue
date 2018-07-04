<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="films" color="blue-dark"/>
        Episode {{ film.episodeId | romanize }}
        - {{ film.title }}
      </h1>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="film">
        <pre>{{ film }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    film() {
      return this.$store.getters['films/getItem'](this.$route.params.slug)
    },
    ...mapState('films', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('films/loadOne', this.$route.params.slug)
  },
}
</script>
