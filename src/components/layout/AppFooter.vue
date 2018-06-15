<template>
  <footer>
    <span class="mx-2">© {{ year }} Ben Booth</span> |
    <a href="https://twitter.com/bkbooth11">
      <fa-icon
        :icon="['fab', 'twitter']"
        transform="grow-4"
        class="mx-2"
        title="Twitter"
      />
    </a> |
    <a href="https://github.com/bkbooth/star-wars-browser">
      <fa-icon
        :icon="['fab', 'github']"
        transform="grow-4"
        class="ml-2"
        title="GitHub"
      />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
