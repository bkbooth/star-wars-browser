<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="characters" color="blue-dark" class="text-2xl"/>
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">{{ character.name }}</h1>
        </div>
      </div>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="character">
        <pre>{{ character }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
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
