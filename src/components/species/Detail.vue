<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="species" color="blue-dark" class="text-2xl" />
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">
            {{ species.name }}
          </h1>
        </div>
      </div>
    </template>

    <template slot="main">
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
