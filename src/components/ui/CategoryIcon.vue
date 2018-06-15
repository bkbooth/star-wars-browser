<template>
  <fa-icon
    :icon="categoryIcon"
    :fixed-width="fixedWidth"
    :rotation="categoryIconRotation"
    :size="size"
    :transform="transform"
  />
</template>

<script>
import isNumber from 'lodash/isNumber'

const ICON_MAP = {
  films: ['fas', 'film'],
  planets: ['fas', 'globe'],
  species: ['fas', 'robot'],
  people: ['fas', 'user'],
  starships: ['fas', 'space-shuttle'],
  vehicles: ['fas', 'car'],
}

export default {
  name: 'CategoryIcon',
  props: {
    category: {
      type: String,
      required: true,
      validator: value => Object.keys(ICON_MAP).includes(value),
    },
    fixedWidth: { type: Boolean, default: false },
    rotation: { type: Number, default: null },
    size: { type: String, default: null },
    transform: { type: [String, Object], default: null },
  },
  computed: {
    categoryIcon() {
      return ICON_MAP[this.category]
    },
    categoryIconRotation() {
      if (isNumber(this.rotation)) return this.rotation
      else return this.category === 'starships' ? 270 : null
    },
  },
}
</script>
