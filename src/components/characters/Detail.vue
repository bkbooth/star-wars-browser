<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="characters" color="blue-dark"/>
        {{ character.name }}
      </h1>
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
