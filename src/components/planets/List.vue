<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="planets"/> Planets</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="planets.length"
      :page="page"
      :page-size="pageSize"
      @set-page="setPage"
      @set-page-size="setPageSize"
    />

    <div v-if="count" class="table-responsive">
      <data-table
        :cols="cols"
        :data="planets"
        :order="order"
        :page="page"
        :page-size="pageSize"
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
import Paginator from '@/components/ui/Paginator'
import buildOrderBy from '../../utils/build-order-by.js'
import updateQueryParams from '../../utils/update-query-params'

export default {
  components: {
    DataTable,
    Paginator,
  },
  props: {
    order: { type: String, default: 'name' },
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
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
      this.$router.push({ query: updateQueryParams(this.$route.query, { orderBy }) })
    },
    setPage(page) {
      this.$router.push({ query: updateQueryParams(this.$route.query, { page }) })
    },
    setPageSize(pageSize) {
      this.$router.push({ query: updateQueryParams(this.$route.query, { pageSize }) })
    },
  },
}
</script>
