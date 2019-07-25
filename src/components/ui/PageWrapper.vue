<template>
  <main>
    <portal v-if="!!$slots.hero" to="hero">
      <div :class="heroColors" class="shadow-inner px-6 py-4">
        <div class="container mx-auto">
          <slot name="hero" />
        </div>
      </div>
    </portal>

    <div class="container mx-auto mt-4 mb-8">
      <slot name="main" />
    </div>
  </main>
</template>

<script>
import { COLORS } from '../../utils/constants'

export default {
  name: 'PageWrapper',
  props: {
    heroBgColor: {
      type: String,
      default: 'blue-600',
      validator: value => COLORS.includes(value),
    },
    heroTextColor: {
      type: String,
      default: 'gray-100',
      validator: value => COLORS.includes(value),
    },
  },
  computed: {
    heroColors() {
      return `bg-${this.heroBgColor} text-${this.heroTextColor}`
    },
  },
}
</script>
