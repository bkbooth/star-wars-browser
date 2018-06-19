<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="characters"/> Characters</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="characters"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of characters</caption>
          <thead>
            <tr>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="name" @set-order="setOrder"/>
                Name
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="gender" @set-order="setOrder"/>
                Gender
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="birthYear" @set-order="setOrder"/>
                Birth Year
                <info-tip content="BBY = before the Battle of Yavin, ABY = after the Battle of Yavin"/>
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="height" @set-order="setOrder"/>
                Height
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="mass" @set-order="setOrder"/>
                Mass
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="character in rows" :key="character.id">
              <td scope="row">
                <router-link :to="`characters/${character.slug}`">{{ character.name }}</router-link>
              </td>
              <td><gender-icon :gender="character.gender"/></td>
              <td>{{ character.birthYear }}</td>
              <td><span v-if="character.height">{{ character.height }}cm</span></td>
              <td><span v-if="character.mass">{{ character.mass }}kg</span></td>
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
import GenderIcon from '@/components/ui/GenderIcon'
import InfoTip from '@/components/ui/InfoTip'
import OrderIcon from '@/components/ui/OrderIcon'

export default {
  components: {
    DataTable,
    GenderIcon,
    InfoTip,
    OrderIcon,
  },
  props: {
    order: { type: String, default: 'name' },
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
      let orderBy = `${direction === 'desc' ? '-' : ''}${fieldName}`
      if (fieldName !== 'name') orderBy += ',name'
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
