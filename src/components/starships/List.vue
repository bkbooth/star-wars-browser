<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="starships"/> Starships</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="starships"
        :order="order"
        category="starships"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
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
    order: { type: String, default: 'name' },
  },
  data() {
    return {
      cols: [
        { field: 'name', label: 'Name' },
        { field: 'class', label: 'Class' },
        { field: 'cost', label: 'Cost', info: 'Cost in galactic credits' },
        { field: 'length', label: 'Length' },
        { field: 'crew', label: 'Crew', info: 'Personnel required to run or pilot the starship' },
        { field: 'passengers', label: 'Passengers', info: 'Non-essential people for transport' },
      ],
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
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction)
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
