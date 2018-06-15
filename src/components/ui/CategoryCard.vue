<template>
  <div class="bg-white shadow border rounded overflow-hidden">
    <div class="bg-grey-lighter p-3 border-b">
      <router-link :to="category" class="text-grey-darkest font-starjedi text-lg">
        <c-icon :category="category"/>
        {{ category | capitalize }}
      </router-link>
    </div>

    <div class="p-3">
      <div class="mb-3">
        <router-link :to="category">View all</router-link>,
        or maybe you're interested in...
      </div>

      <ul v-if="count" class="list-reset px-2">
        <li v-for="record in records" :key="record.id" class="py-2 border-b">
          <router-link :to="`${category}/${record.slug}`">
            {{ record.name || record.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <loading-spinner v-if="count === 0 && loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'

const CATEGORIES = ['films', 'planets', 'species', 'people', 'starships', 'vehicles']

export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: String,
      required: true,
      validator: value => CATEGORIES.includes(value),
    },
  },
  computed: {
    count() {
      return this.records.length
    },
    ...mapState({
      records(state) {
        let all = state[this.category].data
        return take(shuffle(all), 3)
      },
      loading(state) {
        return state[this.category].loading
      },
    }),
  },
  created() {
    this.$store.dispatch(`${this.category}/loadAll`)
  },
}
</script>

<style scoped>
  li:last-child { border: none; }
</style>
