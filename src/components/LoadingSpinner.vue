<template>
  <div v-if="loading">loading...</div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    loading: { type: Boolean, default: false },
  },
}
</script>
