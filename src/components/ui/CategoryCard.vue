<template>
  <div class="flex flex-col bg-white shadow border rounded overflow-hidden">
    <div class="flex-no-shrink bg-grey-lighter p-3 border-b">
      <router-link :to="category" class="text-grey-darkest font-starjedi text-lg">
        <c-icon :category="category"/>
        {{ category | capitalize }}
      </router-link>
    </div>

    <div class="flex-grow p-3">
      <alert v-if="error" :message="error"/>

      <div v-else>
        <div class="mb-3">
          Maybe you're interested in...
        </div>

        <ul v-if="count" class="list-reset">
          <li v-for="item in items" :key="item.id" class="py-2 border-b">
            <router-link :to="`${category}/${item.slug}`">
              <fa-icon icon="chevron-circle-right" transform="shrink-4 down-1"/>
              {{ item.name || item.title }}
            </router-link>
          </li>
        </ul>

        <loading-spinner v-if="count === 0 && loading"/>
      </div>
    </div>

    <div class="flex-no-shrink bg-grey-lighter px-3 py-2 border-t text-right">
      <router-link :to="category" class="text-grey-darkest">
        view all
        <fa-icon icon="chevron-circle-right" transform="shrink-2"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CATEGORIES } from '../../utils/constants'
import compose from 'lodash/fp/compose'
import shuffle from 'lodash/fp/shuffle'
import take from 'lodash/fp/take'
const shuffleAndTake = compose(take(3), shuffle)

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
      return this.items.length
    },
    ...mapState({
      items(state) { return shuffleAndTake(state[this.category].data) },
      loading(state) { return state[this.category].loading },
      error(state) { return state[this.category].error },
    }),
  },
  created() {
    this.$store.dispatch(`${this.category}/loadMany`, { sort: 'random', count: 3 })
  },
}
</script>

<style scoped>
  li:last-child { border: none; }
</style>
