<template>
  <div>
    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><c-icon category="people"/> {{ person.name }}</h1>
      <pre>{{ person | json }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    person() {
      return this.$store.getters['people/getItem'](this.$route.params.personSlug)
    },
    ...mapState('people', ['loading']),
  },
  created() {
    this.$store.dispatch('people/loadOne', this.$route.params.personSlug)
  },
}
</script>
