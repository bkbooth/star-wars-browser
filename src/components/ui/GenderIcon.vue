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
  'male': ['far', 'mars'],
  'female': ['far', 'venus'],
  'hermaphrodite': ['far', 'transgender-alt'],
  'none': ['far', 'genderless'],
  'n/a': ['far', 'genderless'],
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
