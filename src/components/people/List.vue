<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="people"/> People</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count">
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="person in people" :key="person.id">
          <router-link :to="`people/${person.slug}`">{{ person.name }}</router-link>
        </li>
      </ul>
    </div>

    <loading-spinner v-if="loading"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('people', {
      people: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('people', ['count']),
  },
  created() {
    this.$store.dispatch('people/loadMany')
  },
}
</script>
