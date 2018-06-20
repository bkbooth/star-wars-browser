<template>
  <div class="flex items-center mb-3">
    <div class="flex flex-no-shrink border rounded overflow-hidden shadow">
      <button
        :disabled="page === 1"
        class="py-2 px-3 border-r"
        title="Previous page"
        @click="$emit('set-page', page - 1)"
      >«</button>

      <button
        v-for="pageNumber in pages"
        :key="pageNumber"
        :disabled="page === pageNumber"
        :title="`Page ${pageNumber}`"
        class="py-2 px-3 border-r"
        @click="$emit('set-page', pageNumber)"
      >{{ pageNumber }}</button>

      <button
        :disabled="page === numberOfPages"
        class="py-2 px-3"
        title="Next page"
        @click="$emit('set-page', page + 1)"
      >»</button>
    </div>

    <label class="flex-1 text-right ml-2">
      <span class="hidden sm:inline text-grey-dark">Per Page</span>
      <select :value="pageSize" @input="setPageSize">
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
  methods: {
    setPageSize($event) {
      this.$emit('set-page-size', Number($event.target.value))
      this.$emit('set-page', undefined)
    },
  },
}
</script>
