<template>
  <fa-layers
    class="cursor-pointer"
    @click="$emit('set-order', fieldName, direction === 'asc' ? 'desc' : 'asc')"
  >
    <fa-icon
      :icon="['fas', 'sort-up']"
      :class="{ 'text-gray-500': direction !== 'desc' }"
      transform="left-2"
    />
    <fa-icon
      :icon="['fas', 'sort-down']"
      :class="{ 'text-gray-500': direction !== 'asc' }"
      transform="left-2"
    />
  </fa-layers>
</template>

<script>
import { parseOrderParams } from '../../utils/parse-order-params'

export default {
  name: 'OrderIcon',
  props: {
    fieldName: { type: String, required: true },
    order: { type: String, required: true },
  },
  computed: {
    direction() {
      if (this.fieldName !== this.orderByParams.fields[0]) return 'none'
      return this.orderByParams.orders[0]
    },
    orderByParams() {
      return parseOrderParams(this.order)
    },
  },
}
</script>
