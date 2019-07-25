<template>
  <div class="flex flex-col bg-white shadow-md rounded overflow-hidden">
    <div class="flex-shrink-0 bg-gray-300 p-3">
      <h3 class="font-starjedi text-lg">
        <router-link :to="category" class="text-gray-700">
          <c-icon :category="category" />
          {{ category | capitalize }}
        </router-link>
      </h3>
    </div>

    <div class="flex-grow p-3">
      <alert v-if="error" :message="error" />

      <div v-else>
        <div class="mb-3">
          Maybe you're interested in...
        </div>

        <ul v-if="count">
          <li v-for="item in items" :key="item.id" class="pt-2 pb-3">
            <router-link :to="`${category}/${item.slug}`">
              <fa-icon
                :icon="['far', 'chevron-circle-right']"
                transform="shrink-3"
                class="text-blue-500"
              />
              {{ item.name || item.title }}
            </router-link>
          </li>
        </ul>

        <loading-spinner v-if="count === 0 && loading" />
      </div>
    </div>

    <div class="flex-shrink-0 bg-gray-300 px-3 py-2 text-right">
      <router-link :to="category" class="text-gray-700">
        view all
        <fa-icon :icon="['far', 'chevron-circle-right']" transform="shrink-2" />
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
