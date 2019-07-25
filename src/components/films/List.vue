<template>
  <page-wrapper>
    <template v-slot:main>
      <div class="bg-white rounded-lg shadow-xl p-6">
        <h2 class="font-starjedi text-xl text-gray-700 -mt-1 mb-4">
          <c-icon category="films" />
          Films
        </h2>

        <alert v-if="error" :message="error" />

        <paginator
          v-if="count"
          :number-of-items="films.length"
          :page="page"
          :page-size="pageSize"
          class="mb-4"
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
          default-order-field="episodeId"
          @set-order="onSetOrder"
        >
          <template v-slot="{ rows }">
            <tr v-for="film in rows" :key="film.id">
              <td scope="row">
                {{ film.episodeId | romanize }}
              </td>
              <td>
                <router-link :to="`films/${film.slug}`">
                  {{ film.title }}
                </router-link>
              </td>
              <td>{{ film.releaseDate | date('Do MMM YYYY') }}</td>
              <td>{{ film.director }}</td>
              <td>{{ film.producer }}</td>
            </tr>
          </template>
        </data-table>

        <loading-spinner v-if="loading" />
      </div>
    </template>
  </page-wrapper>
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
      cols: [{
        field: 'episodeId',
        label: '#',
        width: '55px',
      }, {
        field: 'title',
        label: 'Title',
      }, {
        field: 'releaseDate',
        label: 'Released',
        width: '136px',
      }, {
        field: 'director',
        label: 'Director',
        width: '160px',
      }, {
        field: 'producer',
        label: 'Producer',
        width: '402px',
      }],
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
  methods: listViewMethods,
}
</script>
