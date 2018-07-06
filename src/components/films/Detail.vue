<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="films" color="blue-dark" class="text-2xl"/>
        </div>
        <div class="flex-grow">
          <p class="font-light uppercase tracking-wide mb-0">Episode {{ film.episodeId | romanize }}</p>
          <h1 class="font-starjedi">{{ film.title }}</h1>
        </div>
      </div>
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
