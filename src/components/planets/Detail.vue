<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 mr-4">
          <c-icon category="planets" color="blue-600" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h2 class="font-starjedi text-3xl mb-2">
            {{ planet.name }}
          </h2>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <alert v-if="error" :message="error" />

      <div v-if="planet">
        <pre>{{ planet }}</pre>
      </div>

      <loading-spinner v-else-if="loading" />
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    planet() {
      return this.$store.getters['planets/getItem'](this.$route.params.slug)
    },
    ...mapState('planets', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('planets/loadOne', this.$route.params.slug)
  },
}
</script>
