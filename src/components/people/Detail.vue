<template>
  <div>
    <alert v-if="error" :message="error"/>

    <div v-if="person">
      <h1 class="font-starjedi"><c-icon category="people"/> {{ person.name }}</h1>
      <pre>{{ person | json }}</pre>
    </div>

    <loading-spinner v-else-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    person() {
      return this.$store.getters['people/getItem'](this.$route.params.personSlug)
    },
    ...mapState('people', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('people/loadOne', this.$route.params.personSlug)
  },
}
</script>
