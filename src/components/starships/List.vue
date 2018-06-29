<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="starships"/> Starships</h1>

    <alert v-if="error" :message="error"/>

    <paginator
      v-if="count"
      :number-of-items="starships.length"
      :page="page"
      :page-size="pageSize"
      @set-page="onSetPage"
      @set-page-size="onSetPageSize"
    />

    <data-table
      v-if="count"
      :cols="cols"
      :data="starships"
      :order="order"
      :page="page"
      :page-size="pageSize"
      category="starships"
      @set-order="onSetOrder"
    >
      <template slot-scope="{ rows }">
        <tr v-for="starship in rows" :key="starship.id">
          <td scope="row">
            <router-link :to="`starships/${starship.slug}`">{{ starship.name }}</router-link>
          </td>
          <td>{{ starship.class }}</td>
          <td class="whitespace-no-wrap"><span v-if="starship.cost != null">
            <img src="../../assets/galactic-credit-symbol.svg" alt="Galactic credits symbol" class="w-2 -mr-1">
            {{ starship.cost | approx-number }}
          </span></td>
          <td><span v-if="starship.length != null">{{ starship.length | number }}m</span></td>
          <td><span v-if="starship.crew != null">{{ starship.crew | number }}</span></td>
          <td><span v-if="starship.passengers != null">{{ starship.passengers | number }}</span></td>
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
        field: 'class',
        label: 'Class',
        width: '265px',
      }, {
        field: 'cost',
        label: 'Cost',
        info: 'Cost in galactic credits',
        width: '102px',
      }, {
        field: 'length',
        label: 'Length',
        width: '102px',
      }, {
        field: 'crew',
        label: 'Crew',
        info: 'Personnel required to run or pilot the starship',
        width: '108px',
      }, {
        field: 'passengers',
        label: 'Passengers',
        info: 'Non-essential people for transport',
        width: '158px',
      }],
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
  methods: listViewMethods,
}
</script>
