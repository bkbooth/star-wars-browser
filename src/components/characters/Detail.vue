<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="character">
      <h1 class="font-starjedi"><c-icon category="characters"/> {{ character.name }}</h1>
      <pre>{{ character }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
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
