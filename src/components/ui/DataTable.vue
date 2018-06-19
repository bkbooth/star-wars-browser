<template>
  <table>
    <caption>List of {{ category }}</caption>
    <thead>
      <tr>
        <th
          v-for="col in cols"
          :key="col.field"
          scope="col"
          class="whitespace-no-wrap"
        >
          <order-icon
            :order="order"
            :field-name="col.field"
            @set-order="onSetOrder"
          />
          {{ col.label }}
          <info-tip v-if="col.info" :content="col.info"/>
        </th>
      </tr>
    </thead>
    <tbody>
      <slot :rows="rows"/>
    </tbody>
  </table>
</template>

<script>
import orderBy from 'lodash/orderBy'
import InfoTip from '@/components/ui/InfoTip'
import OrderIcon from '@/components/ui/OrderIcon'
import parseOrderParams from '../../utils/parse-order-params.js'

const CATEGORIES = ['films', 'planets', 'species', 'characters', 'starships', 'vehicles']

export default {
  name: 'DataTable',
  components: {
    InfoTip,
    OrderIcon,
  },
  props: {
    category: {
      type: String,
      required: true,
      validator: value => CATEGORIES.includes(value),
    },
    cols: { type: Array, required: true },
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
  methods: {
    onSetOrder(...args) {
      this.$emit('set-order', ...args)
    },
  },
}
</script>
