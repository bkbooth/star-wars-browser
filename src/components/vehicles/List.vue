<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="vehicles"/> Vehicles</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="vehicles"
        :order="order"
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
import InfoTip from '@/components/ui/InfoTip'
import OrderIcon from '@/components/ui/OrderIcon'
import buildOrderBy from '../../utils/build-order-by.js'

export default {
  components: {
    DataTable,
    InfoTip,
    OrderIcon,
  },
  props: {
    order: { type: String, default: 'name' },
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
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
