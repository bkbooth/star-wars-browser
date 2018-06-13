<template>
  <div>
    <h1>Species</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
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
      loading: 'loading',
    }),
    ...mapGetters('species', ['count']),
  },
  created() {
    this.$store.dispatch('species/loadAll')
  },
}
</script>
