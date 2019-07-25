<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 mr-4">
          <c-icon category="species" color="blue-600" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h2 class="font-starjedi text-3xl mb-2">
            {{ species.name }}
          </h2>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <alert v-if="error" :message="error" />

      <div v-if="species">
        <pre>{{ species }}</pre>
      </div>

      <loading-spinner v-else-if="loading" />
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    species() {
      return this.$store.getters['species/getItem'](this.$route.params.slug)
    },
    ...mapState('species', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('species/loadOne', this.$route.params.slug)
  },
}
</script>
