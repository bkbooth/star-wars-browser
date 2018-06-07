<template>
  <div>
    <h1>People</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="(person, id) in people" :key="id">
          <router-link :to="`people/${id}`">{{ person.name }}</router-link>
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
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('people', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('people/loadAll')
  },
}
</script>
