<template>
  <table>
    <slot :rows="rows"/>
  </table>
</template>

<script>
import orderBy from 'lodash/orderBy'

export default {
  name: 'SortableTable',
  props: {
    data: { type: Array, required: true },
    order: { type: String, required: true },
  },
  computed: {
    rows() {
      return orderBy(this.data, this.orderByParams.fields, this.orderByParams.orders)
    },
    orderByParams() {
      let orderParts = this.order.split(',')
      let fields = orderParts.map(part => ['-', '+'].includes(part[0]) ? part.slice(1) : part)
      let orders = orderParts.map(part => part[0] === '-' ? 'desc' : 'asc')
      console.log('ORDER BY PARAMS', { orderParts, fields, orders })
      return { fields, orders }
    },
  },
}
</script>
