<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="planets" color="blue-dark" class="text-2xl"/>
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">{{ planet.name }}</h1>
        </div>
      </div>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="planet">
        <pre>{{ planet }}</pre>
      </div>

      <loading-spinner v-else-if="loading"/>
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
