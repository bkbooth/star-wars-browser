<template>
  <div>
    <h1>People</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="people.length > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="person in people" :key="person.url">
          {{ person.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  components: {
    LoadingSpinner,
  },
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
