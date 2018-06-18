<template>
  <fa-layers v-if="size === 'lg'" class="mr-2">
    <fa-icon
      icon="circle"
      transform="grow-8 right-3"
    />
    <fa-icon
      :icon="categoryIcon"
      :rotation="categoryIconRotation"
      fixed-width
      transform="shrink-2 right-1"
      class="text-grey-lightest"
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

const ICON_MAP = {
  films: ['fas', 'film'],
  planets: ['fas', 'globe'],
  species: ['fas', 'robot'],
  characters: ['fas', 'user'],
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
    size: {
      type: String,
      default: 'lg',
      validator: value => ['sm', 'lg'].includes(value),
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
