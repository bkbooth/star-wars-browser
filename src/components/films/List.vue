<template>
  <div>
    <h1 class="font-starjedi"><c-icon category="films"/> Films</h1>

    <alert v-if="error" :message="error"/>

    <div v-if="count" class="table-responsive -mt-8">
      <p class="text-right">Total: {{ count }}</p>
      <data-table
        :data="films"
        :order="order"
        class="table table-striped table-hover"
      >
        <template slot-scope="{ rows }">
          <caption>List of films</caption>
          <thead>
            <tr>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="episodeId" @set-order="setOrder"/>
                Episode
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="title" @set-order="setOrder"/>
                Title
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="releaseDate" @set-order="setOrder"/>
                Released
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="director" @set-order="setOrder"/>
                Director
              </th>
              <th scope="col" class="whitespace-no-wrap">
                <order-icon :order="order" field-name="producer" @set-order="setOrder"/>
                Producer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="film in rows" :key="film.id">
              <td scope="row">{{ film.episodeId | romanize }}</td>
              <td>
                <router-link :to="`films/${film.slug}`">{{ film.title }}</router-link>
              </td>
              <td>{{ film.releaseDate | date('Do MMM YYYY') }}</td>
              <td>{{ film.director }}</td>
              <td>{{ film.producer }}</td>
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

export default {
  components: {
    DataTable,
    OrderIcon,
  },
  props: {
    order: { type: String, default: 'episodeId' },
  },
  computed: {
    ...mapState('films', {
      films: 'data',
      loading: 'loading',
      error: 'error',
    }),
    ...mapGetters('films', ['count']),
  },
  created() {
    this.$store.dispatch('films/loadMany')
  },
  methods: {
    setOrder(fieldName, direction) {
      let orderBy = `${direction === 'desc' ? '-' : ''}${fieldName}`
      if (fieldName !== 'episodeId') orderBy += ',episodeId'
      this.$router.push({ query: { orderBy } })
    },
  },
}
</script>
