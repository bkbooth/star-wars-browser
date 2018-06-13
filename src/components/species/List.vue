<template>
  <div>
    <p><router-link to="/">« Back to Categories</router-link></p>

    <h1><fa-icon icon="robot"/> Species</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="species in species" :key="species.id">
          <router-link :to="`species/${species.slug}`">{{ species.name }}</router-link>
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
