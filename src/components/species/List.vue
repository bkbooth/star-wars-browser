<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="species"/> Species</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="species"
        :order="order"
        category="species"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="species in rows" :key="species.id">
            <td scope="row">
              <router-link :to="`species/${species.slug}`">{{ species.name }}</router-link>
            </td>
            <td>{{ species.classification }}</td>
            <td>{{ species.language }}</td>
            <td><span v-if="species.averageHeight">{{ species.averageHeight }}cm</span></td>
            <td><span v-if="species.averageLifespan">{{ species.averageLifespan }} years</span></td>
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
        { field: 'classification', label: 'Classification' },
        { field: 'language', label: 'Language' },
        { field: 'averageHeight', label: '~Height' },
        { field: 'averageLifespan', label: '~Lifespan' },
      ],
    }
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
