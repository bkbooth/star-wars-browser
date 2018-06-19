<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="characters"/> Characters</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :cols="cols"
        :data="characters"
        :order="order"
        category="characters"
        class="table table-striped table-hover"
        @set-order="setOrder"
      >
        <template slot-scope="{ rows }">
          <tr v-for="character in rows" :key="character.id">
            <td scope="row">
              <router-link :to="`characters/${character.slug}`">{{ character.name }}</router-link>
            </td>
            <td><gender-icon :gender="character.gender"/></td>
            <td><span v-if="character.birthYear != null">{{ character.birthYear | birthYear }}</span></td>
            <td><span v-if="character.height">{{ character.height }}cm</span></td>
            <td><span v-if="character.mass">{{ character.mass }}kg</span></td>
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
import GenderIcon from '@/components/ui/GenderIcon'
import buildOrderBy from '../../utils/build-order-by.js'

export default {
  components: {
    DataTable,
    GenderIcon,
  },
  props: {
    order: { type: String, default: 'name' },
  },
  data() {
    return {
      cols: [
        { field: 'name', label: 'Name' },
        { field: 'gender', label: 'Gender' },
        { field: 'birthYear', label: 'Birth Year', info: 'BBY = before the Battle of Yavin, ABY = after the Battle of Yavin' },
        { field: 'height', label: 'Height' },
        { field: 'mass', label: 'Mass' },
      ],
    }
  },
  computed: {
    ...mapState('characters', {
      characters: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('characters', ['count']),
  },
  created() {
    this.$store.dispatch('characters/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction)
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
