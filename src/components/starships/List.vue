<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="starships"/> Starships</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="starships.length"
      :page="page"
      :page-size="pageSize"
      @set-page="setPage"
      @set-page-size="setPageSize"
    />

    <div v-if="count" class="table-responsive">
      <data-table
        :cols="cols"
        :data="starships"
        :order="order"
        :page="page"
        :page-size="pageSize"
        category="starships"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="starship in rows" :key="starship.id">
            <td scope="row">
              <router-link :to="`starships/${starship.slug}`">{{ starship.name }}</router-link>
            </td>
            <td>{{ starship.class }}</td>
            <td><span v-if="starship.cost != null">€{{ starship.cost | number }}</span></td>
            <td><span v-if="starship.length != null">{{ starship.length | number }}m</span></td>
            <td><span v-if="starship.crew != null">{{ starship.crew | number }}</span></td>
            <td><span v-if="starship.passengers != null">{{ starship.passengers | number }}</span></td>
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
        { field: 'class', label: 'Class' },
        { field: 'cost', label: 'Cost', info: 'Cost in galactic credits' },
        { field: 'length', label: 'Length' },
        { field: 'crew', label: 'Crew', info: 'Personnel required to run or pilot the starship' },
        { field: 'passengers', label: 'Passengers', info: 'Non-essential people for transport' },
      ],
    }
  },
  computed: {
    ...mapState('starships', {
      starships: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('starships', ['count']),
  },
  created() {
    this.$store.dispatch('starships/loadMany')
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
