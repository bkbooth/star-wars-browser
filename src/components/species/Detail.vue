<template>
  <div>
    <p><router-link to="/species">« Back to Species</router-link></p>

    <div v-if="species">
      <h1>{{ species.name }}</h1>
      <pre>{{ species | json }}</pre>
    </div>
    <div v-else>
      <p>Species not available yet. Loading? {{ loading }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    species() {
      return this.$store.getters['species/getItem'](this.$route.params.speciesId)
    },
    ...mapState('species', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('species/loadOne', this.$route.params.speciesId)
  },
}
</script>
