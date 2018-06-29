<template>
  <main>
    <portal v-if="!!$slots.hero" to="hero">
      <div :class="heroColors" class="shadow-inner p-6">
        <div class="container mx-auto">
          <slot name="hero"/>
        </div>
      </div>
    </portal>

    <div class="container mx-auto mt-4 mb-8">
      <slot name="main"/>
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
      default: 'grey-darkest',
      validator: value => COLORS.includes(value),
    },
    heroTextColor: {
      type: String,
      default: 'grey-lightest',
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
