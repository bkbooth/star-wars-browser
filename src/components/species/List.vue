<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="species"/> Species</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="species.length"
      :page="page"
      :page-size="pageSize"
      @set-page="setPage"
      @set-page-size="setPageSize"
    />

    <data-table
      v-if="count"
      :cols="cols"
      :data="species"
      :order="order"
      :page="page"
      :page-size="pageSize"
      category="species"
      @set-order="setOrder"
    >
      <template slot-scope="{ rows }">
        <tr v-for="species in rows" :key="species.id">
          <td scope="row">
            <router-link :to="`species/${species.slug}`">{{ species.name }}</router-link>
          </td>
          <td>{{ species.classification }}</td>
          <td>{{ species.language }}</td>
          <td><span v-if="species.averageHeight">{{ species.averageHeight }}cm</span></td>
          <td><span v-if="species.averageLifespan">{{ species.averageLifespan }} years</span></td>
        </tr>
      </template>
    </data-table>

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
        { field: 'classification', label: 'Classification' },
        { field: 'language', label: 'Language' },
        { field: 'averageHeight', label: '~Height' },
        { field: 'averageLifespan', label: '~Lifespan' },
      ],
    }
  },
  computed: {
    ...mapState('species', {
      species: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('species', ['count']),
  },
  created() {
    this.$store.dispatch('species/loadMany')
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
