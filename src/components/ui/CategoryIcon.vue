<template>
  <fa-layers v-if="size === 'lg'" class="mr-2">
    <fa-icon
      :icon="['fas', 'circle']"
      transform="grow-8 right-3"
    />
    <fa-icon
      :icon="categoryIcon"
      :rotation="categoryIconRotation"
      :class="`text-${color}`"
      fixed-width
      transform="shrink-3 right-1"
    />
  </fa-layers>

  <fa-icon
    v-else-if="size === 'sm'"
    :icon="categoryIcon"
    :fixed-width="fixedWidth"
    :rotation="categoryIconRotation"
    :transform="transform"
  />
</template>

<script>
import isNumber from 'lodash/isNumber'
import { COLORS } from '../../utils/constants'

const ICON_MAP = {
  films: ['far', 'film'],
  planets: ['far', 'globe'],
  species: ['far', 'robot'],
  characters: ['far', 'user'],
  starships: ['far', 'space-shuttle'],
  vehicles: ['far', 'car'],
}

export default {
  name: 'CategoryIcon',
  props: {
    category: {
      type: String,
      required: true,
      validator: value => Object.keys(ICON_MAP).includes(value),
    },
    size: {
      type: String,
      default: 'lg',
      validator: value => ['sm', 'lg'].includes(value),
    },
    color: {
      type: String,
      default: 'yellow-dark',
      validator: value => COLORS.includes(value),
    },
    fixedWidth: { type: Boolean, default: false },
    rotation: { type: Number, default: null },
    transform: { type: String, default: null },
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
