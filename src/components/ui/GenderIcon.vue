<template>
  <fa-icon
    v-tooltip="gender"
    :icon="icon"
    :title="gender"
    transform="grow-3"
  />
</template>

<script>
const GENDERS_MAP = {
  'male': ['fas', 'mars'],
  'female': ['fas', 'venus'],
  'hermaphrodite': ['fas', 'transgender-alt'],
  'none': ['fas', 'genderless'],
  'n/a': ['fas', 'genderless'],
}

export default {
  name: 'GenderIcon',
  props: {
    gender: {
      type: String,
      required: true,
      validator: value => Object.keys(GENDERS_MAP).includes(value),
    },
  },
  computed: {
    icon() {
      return GENDERS_MAP[this.gender]
    },
  },
}
</script>
