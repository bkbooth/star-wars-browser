<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="planets"/> Planets</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="planets"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of planets</caption>
          <thead>
            <tr>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="name" @set-order="setOrder"/>
                Name
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="diameter" @set-order="setOrder"/>
                Size
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="population" @set-order="setOrder"/>
                Population
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="climate" @set-order="setOrder"/>
                Climate
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="terrain" @set-order="setOrder"/>
                Terrain
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="planet in rows" :key="planet.id">
              <td scope="row">
                <router-link :to="`planets/${planet.slug}`">{{ planet.name }}</router-link>
              </td>
              <td><span v-if="planet.diameter != null">{{ planet.diameter | number }}</span></td>
              <td><span v-if="planet.population != null">{{ planet.population | number }}</span></td>
              <td>{{ planet.climate }}</td>
              <td>{{ planet.terrain }}</td>
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
import OrderIcon from '@/components/ui/OrderIcon'
import buildOrderBy from '../../utils/build-order-by.js'

export default {
  components: {
    DataTable,
    OrderIcon,
  },
  props: {
    order: { type: String, default: 'name' },
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
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction)
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
