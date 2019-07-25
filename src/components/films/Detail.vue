<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 mr-4">
          <c-icon category="films" color="blue-600" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <p class="font-light uppercase tracking-wider mb-0">
            Episode {{ film.episodeId | romanize }}
          </p>
          <h2 class="font-starjedi text-3xl mb-2">
            {{ film.title }}
          </h2>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <alert v-if="error" :message="error" />

      <div v-if="film">
        <pre>{{ film }}</pre>
      </div>

      <loading-spinner v-else-if="loading" />
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
