<template>
  <div>
    <p><router-link to="/people">« Back to People</router-link></p>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <h1><fa-icon icon="user"/> {{ person.name }}</h1>
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
