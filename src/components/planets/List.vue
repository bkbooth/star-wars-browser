<template>
  <div>
    <p><router-link to="/">« Back to Categories</router-link></p>

    <h1><fa-icon icon="globe"/> Planets</h1>

    <loading-spinner v-if="loading"/>

    <div v-else>
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="planet in planets" :key="planet.id">
          <router-link :to="`planets/${planet.slug}`">{{ planet.name }}</router-link>
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
