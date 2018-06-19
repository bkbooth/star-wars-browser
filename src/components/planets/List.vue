<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="planets"/> Planets</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="planets"
        :order="order"
        category="planets"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="planet in rows" :key="planet.id">
            <td scope="row">
              <router-link :to="`planets/${planet.slug}`">{{ planet.name }}</router-link>
            </td>
            <td><span v-if="planet.diameter">{{ planet.diameter | number }}km</span></td>
            <td><span v-if="planet.population != null">{{ planet.population | number }}</span></td>
            <td>{{ planet.climate }}</td>
            <td>{{ planet.terrain }}</td>
          </tr>
        </template>
      </data-table>
    </div>

    <loading-spinner v-if="loading"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DataTable from '@/components/ui/DataTable'
import buildOrderBy from '../../utils/build-order-by.js'

export default {
  components: {
    DataTable,
  },
  props: {
    order: { type: String, default: 'name' },
  },
  data() {
    return {
      cols: [
        { field: 'name', label: 'Name' },
        { field: 'diameter', label: 'Size', info: 'Diameter in kilometers' },
        { field: 'population', label: 'Population' },
        { field: 'climate', label: 'Climate' },
        { field: 'terrain', label: 'Terrain' },
      ],
    }
  },
  computed: {
    ...mapState('planets', {
      planets: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('planets', ['count']),
  },
  created() {
    this.$store.dispatch('planets/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction)
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
