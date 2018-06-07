<template>
  <div>
    <h1>Species</h1>

    <loading-spinner :loading="loading"/>

    <div v-if="loadedCount > 0">
      <p>Total: {{ totalCount }}, Loaded: {{ loadedCount }}</p>
      <ul>
        <li v-for="(species, id) in species" :key="id">
          <router-link :to="`species/${id}`">{{ species.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('species', {
      species: 'data',
      totalCount: 'count',
      loading: 'loading',
    }),
    ...mapGetters('species', {
      loadedCount: 'dataCount',
    }),
  },
  created() {
    this.$store.dispatch('species/loadAll')
  },
}
</script>
