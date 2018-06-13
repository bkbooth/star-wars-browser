<template>
  <div class="wrapper">
    <fa-icon
      v-if="loading"
      icon="circle-notch"
      size="3x"
      spin
    />
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    loading: { type: Boolean, default: true },
  },
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
</style>
