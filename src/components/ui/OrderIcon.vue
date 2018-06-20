<template>
  <fa-layers
    class="cursor-pointer -mr-1"
    @click="$emit('set-order', fieldName, direction === 'asc' ? 'desc' : 'asc')"
  >
    <fa-icon
      :class="{ 'text-grey': direction !== 'desc' }"
      icon="sort-up"
      transform="left-2"
    />
    <fa-icon
      :class="{ 'text-grey': direction !== 'asc' }"
      icon="sort-down"
      transform="left-2"
    />
  </fa-layers>
</template>

<script>
import parseOrderParams from '../../utils/parse-order-params'

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
