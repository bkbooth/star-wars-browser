<template>
  <div class="flex max-w-full items-center">
    <div class="flex-shrink inline-flex bg-white border rounded overflow-hidden">
      <button
        :disabled="page === 1"
        class="flex-shrink py-1 w-8 border-r"
        title="Previous page"
        @click="$emit('set-page', page - 1)"
      >
        «
      </button>

      <button
        v-for="pageNumber in pages"
        :key="pageNumber"
        :disabled="page === pageNumber"
        :title="`Page ${pageNumber}`"
        class="flex-shrink py-1 w-8 border-r"
        @click="$emit('set-page', pageNumber)"
      >
        {{ pageNumber }}
      </button>

      <button
        :disabled="page === numberOfPages"
        class="flex-shrink py-1 w-8"
        title="Next page"
        @click="$emit('set-page', page + 1)"
      >
        »
      </button>
    </div>

    <label class="flex-grow text-right ml-3">
      <span class="hidden sm:inline text-gray-600 mr-1">Per Page</span>
      <select :value="pageSize" @input="$emit('set-page-size', Number($event.target.value))">
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </label>
  </div>
</template>

<script>
import range from 'lodash/range'

export default {
  name: 'Paginator',
  props: {
    numberOfItems: { type: Number, required: true },
    page: { type: Number, required: true },
    pageSize: { type: Number, required: true },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.numberOfItems / this.pageSize)
    },
    pages() {
      return range(1, this.numberOfPages + 1)
    },
  },
}
</script>
