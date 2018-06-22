<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="films"/> Films</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="films.length"
      :page="page"
      :page-size="pageSize"
      @set-page="onSetPage"
      @set-page-size="onSetPageSize"
    />

    <data-table
      v-if="count"
      :cols="cols"
      :data="films"
      :order="order"
      :page="page"
      :page-size="pageSize"
      category="films"
      @set-order="onSetOrder"
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

    <loading-spinner v-if="loading"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { listViewMethods } from '../../utils/list-view-methods'
import DataTable from '@/components/ui/DataTable'
import Paginator from '@/components/ui/Paginator'

export default {
  components: {
    DataTable,
    Paginator,
  },
  props: {
    order: { type: String, default: 'episodeId' },
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
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
  methods: listViewMethods({ defaultOrderField: 'episodeId' }),
}
</script>
