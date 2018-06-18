<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="film">
      <h1 class="font-starjedi">
        <c-icon category="films"/>
        Episode {{ film.episodeId }}
        - {{ film.title }}
      </h1>
      <pre>{{ film }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
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
