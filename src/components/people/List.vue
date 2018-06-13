<template>
  <div>
    <h1>People</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="person in people" :key="person.id">
          <router-link :to="`people/${person.slug}`">{{ person.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('people', {
      people: 'data',
      loading: 'loading',
    }),
    ...mapGetters('people', ['count']),
  },
  created() {
    this.$store.dispatch('people/loadAll')
  },
}
</script>
