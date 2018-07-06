<template>
  <fa-icon
    v-tooltip="content"
    :icon="['far', 'info-circle']"
    :title="content"
    transform="shrink-1"
  />
</template>

<script>
export default {
  name: 'InfoTip',
  props: {
    content: { type: String, required: true },
  },
}
</script>
