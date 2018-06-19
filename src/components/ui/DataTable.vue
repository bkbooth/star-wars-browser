<template>
  <table>
    <slot :rows="rows"/>
  </table>
</template>

<script>
import orderBy from 'lodash/orderBy'
import parseOrderParams from '../../utils/parse-order-params.js'

export default {
  name: 'DataTable',
  props: {
    data: { type: Array, required: true },
    order: { type: String, required: true },
  },
  computed: {
    rows() {
      return orderBy(this.data, this.orderByParams.fields, this.orderByParams.orders)
    },
    orderByParams() {
      return parseOrderParams(this.order)
    },
  },
}
</script>
