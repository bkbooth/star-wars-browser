<template>
  <div :class="alertClasses" class="alert">
    <fa-icon :icon="icon" fixed-width/> {{ message }}
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
      validator: (value) => Object.keys(ALERT_ICONS).includes(value),
    },
  },
  computed: {
    alertClasses() {
      return {
        'alert-error': this.type === 'error',
      }
    },
    icon() {
      return ALERT_ICONS[this.type]
    },
  },
}
</script>

<style scoped>
.alert {
  padding: .75rem 1.25rem;
  margin: 1rem 0;
  border: 1px solid;
  border-radius: .25rem;
}
.alert-error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>
