<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="species"/> Species</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="species"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of species</caption>
          <thead>
            <tr>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="name" @set-order="setOrder"/>
                Name
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="classification" @set-order="setOrder"/>
                Classification
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="language" @set-order="setOrder"/>
                Language
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="averageHeight" @set-order="setOrder"/>
                ~Height
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="averageLifespan" @set-order="setOrder"/>
                ~Lifespan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="species in rows" :key="species.id">
              <td scope="row">
                <router-link :to="`species/${species.slug}`">{{ species.name }}</router-link>
              </td>
              <td>{{ species.classification }}</td>
              <td>{{ species.language }}</td>
              <td><span v-if="species.averageHeight">{{ species.averageHeight }}cm</span></td>
              <td><span v-if="species.averageLifespan">{{ species.averageLifespan }} years</span></td>
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
    ...mapState('species', {
      species: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('species', ['count']),
  },
  created() {
    this.$store.dispatch('species/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction)
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
