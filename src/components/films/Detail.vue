<template>
  <page-wrapper>
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink mr-4">
          <c-icon category="films" color="blue-dark" class="text-2xl"/>
        </div>
        <div class="flex-grow">
          <p class="font-light uppercase tracking-wide mb-0">Episode {{ film.episodeId | romanize }}</p>
          <h1 class="font-starjedi">{{ film.title }}</h1>
        </div>
      </div>
    </template>

    <template slot="main">
      <alert v-if="error" :message="error"/>

      <div v-if="film" class="flex flex-wrap items-stretch -m-3">
        <div class="flex-grow w-64 m-3 flex flex-col bg-white shadow-md rounded overflow-hidden">
          <div class="flex-no-shrink bg-grey-light p-3">
            <span class="text-grey-darkest font-starjedi text-lg">
              <fa-icon :icon="['far', 'list']"/>
              Details
            </span>
          </div>
          <div class="flex-grow p-3">
            <p>released <b>{{ film.releaseDate | date('Do MMM YYYY') }}</b></p>
            <p>directed by <b>{{ film.director }}</b></p>
            <p class="mb-0">produced by <b>{{ film.producer }}</b></p>
          </div>
        </div>

        <category-card
          v-for="category in categories"
          :key="category"
          :category="category"
          class="flex-grow w-64 m-3"
        />
      </div>

      <loading-spinner v-else-if="loading"/>
    </template>
  </page-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import CategoryCard from '@/components/ui/CategoryCard'

const SUB_CATEGORIES = ['characters', 'species', 'planets', 'starships', 'vehicles']

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: SUB_CATEGORIES,
    }
  },
  computed: {
    film() {
      return this.$store.getters['films/getItem'](this.$route.params.slug)
    },
    ...mapState('films', ['loading', 'error']),
  },
  created() {
    this.$store.dispatch('films/loadOne', this.$route.params.slug)
  },
}
</script>
