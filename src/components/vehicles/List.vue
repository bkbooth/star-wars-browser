<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="vehicles"/> Vehicles</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive">
      <paginator
        :number-of-items="vehicles.length"
        :page="page"
        :page-size="pageSize"
        @set-page="setPage"
        @set-page-size="setPageSize"
      />

      <data-table
        :cols="cols"
        :data="vehicles"
        :order="order"
        :page="page"
        :page-size="pageSize"
        category="vehicles"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="vehicle in rows" :key="vehicle.id">
            <td scope="row">
              <router-link :to="`vehicles/${vehicle.slug}`">{{ vehicle.name }}</router-link>
            </td>
            <td>{{ vehicle.class }}</td>
            <td><span v-if="vehicle.cost">€{{ vehicle.cost | number }}</span></td>
            <td><span v-if="vehicle.length">{{ vehicle.length | number }}m</span></td>
            <td><span v-if="vehicle.crew != null">{{ vehicle.crew | number }}</span></td>
            <td><span v-if="vehicle.passengers != null">{{ vehicle.passengers | number }}</span></td>
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
import buildOrderBy from '../../utils/build-order-by'
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
        { field: 'class', label: 'Class' },
        { field: 'cost', label: 'Cost', info: 'Cost in galactic credits' },
        { field: 'length', label: 'Length' },
        { field: 'crew', label: 'Crew', info: 'Personnel required to run or pilot the vehicle' },
        { field: 'passengers', label: 'Passengers', info: 'Non-essential people for transport' },
      ],
    }
  },
  computed: {
    ...mapState('vehicles', {
      vehicles: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('vehicles', ['count']),
  },
  created() {
    this.$store.dispatch('vehicles/loadMany')
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
