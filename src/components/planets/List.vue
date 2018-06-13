<template>
  <div>
    <h1>Planets</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="(planet, id) in planets" :key="id">
          <router-link :to="`planets/${id}`">{{ planet.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('planets', {
      planets: 'data',
      loading: 'loading',
    }),
    ...mapGetters('planets', ['count']),
  },
  created() {
    this.$store.dispatch('planets/loadAll')
  },
}
</script>
