<template>
  <div>
    <p><router-link to="/people">« Back to People</router-link></p>

    <div v-if="person">
      <h1>{{ person.name }}</h1>
      <pre>{{ person | json }}</pre>
    </div>
    <div v-else>
      <p>Person not available yet. Loading? {{ loading }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    person() {
      return this.$store.getters['people/getItem'](this.$route.params.personId)
    },
    ...mapState('people', {
      loading: 'loading',
    }),
  },
  created() {
    this.$store.dispatch('people/loadOne', this.$route.params.personId)
  },
}
</script>
