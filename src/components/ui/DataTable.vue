<template>
  <table>
    <caption>
      List of {{ category }},
      showing {{ (page - 1) * pageSize + 1 }}
      to {{ page === Math.ceil(data.length / pageSize) ? data.length : page * pageSize }}
      of {{ data.length }}
    </caption>
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
import parseOrderParams from '../../utils/parse-order-params'

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
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
  },
  computed: {
    rows() {
      let startIndex = (this.page - 1) * this.pageSize
      return this.allRows.slice(startIndex, startIndex + this.pageSize)
    },
    allRows() {
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