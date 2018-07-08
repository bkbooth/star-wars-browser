<template>
  <page-wrapper>
    <template slot="main">
      <p class="mb-8">
        Welcome to the Star Wars Browser! A front-end for
        <a href="https://swapi.co/">The Star Wars API</a>.
        Except it's not quite that anymore,
        I ended up rolling my own API which pulls data from SWAPI.
      </p>

      <div class="flex flex-wrap items-stretch -m-3">
        <category-card
          v-for="category in categories"
          :key="category"
          :category="category"
          :view-all="true"
          class="flex-grow w-64 m-3"
        >
          <p class="mb-3">Maybe you're interested in...</p>
        </category-card>
      </div>
    </template>
  </page-wrapper>
</template>

<script>
import CategoryCard from '@/components/ui/CategoryCard'
import { CATEGORIES as categories } from '../../utils/constants'

export default {
  components: {
    CategoryCard,
  },
  data() {
    return { categories }
  },
}
</script>
