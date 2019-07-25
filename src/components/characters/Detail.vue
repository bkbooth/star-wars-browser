<template>
  <page-wrapper>
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 mr-4">
          <c-icon category="characters" color="blue-600" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h2 class="font-starjedi text-3xl mb-2">
            {{ character.name }}
          </h2>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <alert v-if="error" :message="error" />

      <div v-if="character">
        <pre>{{ character }}</pre>
      </div>

      <loading-spinner v-else-if="loading" />
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    character() {
      return this.$store.getters['characters/getItem'](this.$route.params.slug)
    },
    ...mapState('characters', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('characters/loadOne', this.$route.params.slug)
  },
}
</script>
