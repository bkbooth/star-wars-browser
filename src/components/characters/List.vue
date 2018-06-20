<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="characters"/> Characters</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="characters.length"
      :page="page"
      :page-size="pageSize"
      @set-page="setPage"
      @set-page-size="setPageSize"
    />

    <div v-if="count" class="table-responsive">
      <data-table
        :cols="cols"
        :data="characters"
        :order="order"
        :page="page"
        :page-size="pageSize"
        category="characters"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="character in rows" :key="character.id">
            <td scope="row">
              <router-link :to="`characters/${character.slug}`">{{ character.name }}</router-link>
            </td>
            <td><gender-icon :gender="character.gender"/></td>
            <td><span v-if="character.birthYear != null">{{ character.birthYear | birthYear }}</span></td>
            <td><span v-if="character.height">{{ character.height }}cm</span></td>
            <td><span v-if="character.mass">{{ character.mass }}kg</span></td>
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
import GenderIcon from '@/components/ui/GenderIcon'
import Paginator from '@/components/ui/Paginator'
import buildOrderBy from '../../utils/build-order-by.js'
import updateQueryParams from '../../utils/update-query-params'

export default {
  components: {
    DataTable,
    GenderIcon,
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
        { field: 'gender', label: 'Gender' },
        { field: 'birthYear', label: 'Birth Year', info: 'BBY = before the Battle of Yavin, ABY = after the Battle of Yavin' },
        { field: 'height', label: 'Height' },
        { field: 'mass', label: 'Mass' },
      ],
    }
  },
  computed: {
    ...mapState('characters', {
      characters: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('characters', ['count']),
  },
  created() {
    this.$store.dispatch('characters/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction, 'episodeId')
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
