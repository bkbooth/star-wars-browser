<template>
  <div class="text-center p-6">
    <fa-icon
      v-if="loading"
      :icon="['far', 'circle-notch']"
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
