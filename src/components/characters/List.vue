<template>
  <page-wrapper>
    <template v-slot:main>
      <div class="bg-white rounded-lg shadow-xl p-6">
        <h2 class="font-starjedi text-xl text-gray-700 -mt-1 mb-4">
          <c-icon category="characters" />
          Characters
        </h2>

        <alert v-if="error" :message="error" />

        <paginator
          v-if="count"
          :number-of-items="characters.length"
          :page="page"
          :page-size="pageSize"
          class="mb-4"
          @set-page="onSetPage"
          @set-page-size="onSetPageSize"
        />

        <data-table
          v-if="count"
          :cols="cols"
          :data="characters"
          :order="order"
          :page="page"
          :page-size="pageSize"
          category="characters"
          @set-order="onSetOrder"
        >
          <template v-slot="{ rows }">
            <tr v-for="character in rows" :key="character.id">
              <td scope="row">
                <router-link :to="`characters/${character.slug}`">
                  {{ character.name }}
                </router-link>
              </td>
              <td class="text-center">
                <gender-icon :gender="character.gender" />
              </td>
              <td><span v-if="character.birthYear != null">{{ character.birthYear | birthYear }}</span></td>
              <td><span v-if="character.height">{{ character.height }}cm</span></td>
              <td><span v-if="character.mass">{{ character.mass }}kg</span></td>
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
import GenderIcon from '@/components/ui/GenderIcon'
import Paginator from '@/components/ui/Paginator'

export default {
  components: {
    DataTable,
    GenderIcon,
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
        field: 'gender',
        label: 'Gender',
        width: '100px',
      }, {
        field: 'birthYear',
        label: 'Birth Year',
        info: `
          <b>BBY</b> - before the Battle of Yavin<br>
          <b>ABY</b> - after the Battle of Yavin
        `,
        width: '145px',
      }, {
        field: 'height',
        label: 'Height',
        width: '95px',
      }, {
        field: 'mass',
        label: 'Mass',
        width: '85px',
      }],
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
  methods: listViewMethods,
}
</script>
