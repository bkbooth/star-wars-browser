<template>
  <div>
    <h1><c-icon category="starships"/> Starships</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="starship in starships" :key="starship.id">
          <router-link :to="`starships/${starship.slug}`">{{ starship.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('starships', {
      starships: 'data',
      loading: 'loading',
    }),
    ...mapGetters('starships', ['count']),
  },
  created() {
    this.$store.dispatch('starships/loadAll')
  },
}
</script>
