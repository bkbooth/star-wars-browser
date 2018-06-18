<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="species">
      <h1 class="font-starjedi"><c-icon category="species"/> {{ species.name }}</h1>
      <pre>{{ species }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
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
