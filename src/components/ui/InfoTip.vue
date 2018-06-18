<template>
  <fa-icon
    v-tooltip="content"
    :title="content"
    icon="info-circle"
    transform="shrink-1"
    class="ml-1"
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
