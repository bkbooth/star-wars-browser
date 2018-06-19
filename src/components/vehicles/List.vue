<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="vehicles"/> Vehicles</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="vehicles"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of vehicles</caption>
          <thead>
            <tr>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="name" @set-order="setOrder"/>
                Name
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="class" @set-order="setOrder"/>
                Class
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="cost" @set-order="setOrder"/>
                Cost
                <info-tip content="Cost in galactic credits"/>
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="length" @set-order="setOrder"/>
                Length
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="crew" @set-order="setOrder"/>
                Crew
                <info-tip content="Personnel required to run or pilot the vehicle"/>
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="passengers" @set-order="setOrder"/>
                Passengers
                <info-tip content="Non-essential people for transport"/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vehicle in rows" :key="vehicle.id">
              <td scope="row">
                <router-link :to="`vehicles/${vehicle.slug}`">{{ vehicle.name }}</router-link>
              </td>
              <td>{{ vehicle.class }}</td>
              <td><span v-if="vehicle.cost != null">€{{ vehicle.cost | number }}</span></td>
              <td><span v-if="vehicle.length != null">{{ vehicle.length | number }}m</span></td>
              <td><span v-if="vehicle.crew != null">{{ vehicle.crew | number }}</span></td>
              <td><span v-if="vehicle.passengers != null">{{ vehicle.passengers | number }}</span></td>
            </tr>
          </tbody>
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
