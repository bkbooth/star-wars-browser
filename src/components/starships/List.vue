<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="starships"/> Starships</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="starships"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of starships</caption>
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
                <info-tip content="Personnel required to run or pilot the starship"/>
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="passengers" @set-order="setOrder"/>
                Passengers
                <info-tip content="Non-essential people for transport"/>
              </th>
            </tr>
          </thead>
          <tbody>
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
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
