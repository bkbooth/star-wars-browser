<template>
  <page-wrapper>
    <template v-slot:main>
      <div class="bg-white rounded-lg shadow-xl p-6">
        <h2 class="font-starjedi text-xl text-gray-700 -mt-1 mb-4">
          <c-icon category="planets" />
          Planets
        </h2>

        <alert v-if="error" :message="error" />

        <paginator
          v-if="count"
          :number-of-items="planets.length"
          :page="page"
          :page-size="pageSize"
          class="mb-4"
          @set-page="onSetPage"
          @set-page-size="onSetPageSize"
        />

        <data-table
          v-if="count"
          :cols="cols"
          :data="planets"
          :order="order"
          :page="page"
          :page-size="pageSize"
          category="planets"
          @set-order="onSetOrder"
        >
          <template v-slot="{ rows }">
            <tr v-for="planet in rows" :key="planet.id">
              <td scope="row">
                <router-link :to="`planets/${planet.slug}`">
                  {{ planet.name }}
                </router-link>
              </td>
              <td><span v-if="planet.diameter">{{ planet.diameter | number }}km</span></td>
              <td><span v-if="planet.population != null">{{ planet.population | approx-number }}</span></td>
              <td>{{ planet.climate }}</td>
              <td>{{ planet.terrain }}</td>
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
    order: { type: String, default: 'name' },
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
  },
  data() {
    return {
      cols: [{
        field: 'name',
        label: 'Name',
      }, {
        field: 'diameter',
        label: 'Size',
        info: 'Diameter in kilometers',
        width: '106px',
      }, {
        field: 'population',
        label: 'Population',
        width: '130px',
      }, {
        field: 'climate',
        label: 'Climate',
        width: '206px',
      }, {
        field: 'terrain',
        label: 'Terrain',
        width: '322px',
      }],
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
  methods: listViewMethods,
}
</script>
