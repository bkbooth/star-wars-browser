<template>
  <div :class="alertClasses" class="my-4 px-4 py-3 border rounded">
    <fa-icon :icon="icon" fixed-width /> {{ message }}
  </div>
</template>

<script>
const ALERT_ICONS = {
  error: ['fas', 'exclamation-triangle'],
}

export default {
  name: 'Alert',
  props: {
    message: { type: String, required: true },
    type: {
      type: String,
      default: 'error',
      validator: value => Object.keys(ALERT_ICONS).includes(value),
    },
  },
  computed: {
    alertClasses() {
      return {
        'text-red-darker bg-red-lightest border-red-lighter': this.type === 'error',
      }
    },
    icon() {
      return ALERT_ICONS[this.type]
    },
  },
}
</script>
