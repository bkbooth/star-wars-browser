<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="starships" color="blue-dark" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">
            {{ starship.model }}
          </h1>
          <p class="font-light uppercase tracking-wide mb-1">
            {{ starship.manufacturer }}
          </p>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <alert v-if="error" :message="error" />

      <div v-if="starship">
        <pre>{{ starship }}</pre>
      </div>

      <loading-spinner v-else-if="loading" />
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    starship() {
      return this.$store.getters['starships/getItem'](this.$route.params.slug)
    },
    ...mapState('starships', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('starships/loadOne', this.$route.params.slug)
  },
}
</script>
