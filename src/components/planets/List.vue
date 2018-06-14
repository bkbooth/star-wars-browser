<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="planets"/> Planets</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count">
      <p>Total: {{ count }}</p>
      <ul>
        <li v-for="planet in planets" :key="planet.id">
          <router-link :to="`planets/${planet.slug}`">{{ planet.name }}</router-link>
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
    ...mapState('planets', {
      planets: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('planets', ['count']),
  },
  created() {
    this.$store.dispatch('planets/loadAll')
  },
}
</script>
