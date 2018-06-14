<template>
  <footer class="bg-blue-darker text-grey-lightest text-sm text-right px-6 py-3 border-t border-blue-dark">
    © {{ year }} Ben Booth |
    <a href="https://twitter.com/bkbooth11">
      <fa-icon
        :icon="['fab', 'twitter']"
        fixed-width
        title="Twitter"
      />
    </a> |
    <a href="https://github.com/bkbooth/star-wars-browser">
      <fa-icon
        :icon="['fab', 'github']"
        fixed-width
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
