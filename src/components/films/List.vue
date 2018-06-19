<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="films"/> Films</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="films"
        :order="order"
        category="films"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="film in rows" :key="film.id">
            <td scope="row">{{ film.episodeId | romanize }}</td>
            <td>
              <router-link :to="`films/${film.slug}`">{{ film.title }}</router-link>
            </td>
            <td>{{ film.releaseDate | date('Do MMM YYYY') }}</td>
            <td>{{ film.director }}</td>
            <td>{{ film.producer }}</td>
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
    order: { type: String, default: 'episodeId' },
  },
  data() {
    return {
      cols: [
        { field: 'episodeId', label: '#' },
        { field: 'title', label: 'Title' },
        { field: 'releaseDate', label: 'Released' },
        { field: 'director', label: 'Director' },
        { field: 'producer', label: 'Producer' },
      ],
    }
  },
  computed: {
    ...mapState('films', {
      films: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('films', ['count']),
  },
  created() {
    this.$store.dispatch('films/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction, 'episodeId')
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
