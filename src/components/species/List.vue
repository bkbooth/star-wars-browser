<template>
  <div>
    <h1><c-icon category="species"/> Species</h1>

    <div v-if="count">
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="species in species" :key="species.id">
          <router-link :to="`species/${species.slug}`">{{ species.name }}</router-link>
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
