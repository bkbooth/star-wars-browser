<template>
  <page-wrapper>
    <template slot="hero">
      <h1 class="font-starjedi">
        <c-icon category="starships" color="blue-dark"/>
        {{ starship.name }}
      </h1>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="starship">
        <pre>{{ starship }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
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
