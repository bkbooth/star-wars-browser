<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 mr-4">
          <c-icon category="starships" color="blue-600" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h2 class="font-starjedi text-3xl mb-1">
            {{ starship.model }}
          </h2>
          <p class="font-light uppercase tracking-wider mb-1">
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
