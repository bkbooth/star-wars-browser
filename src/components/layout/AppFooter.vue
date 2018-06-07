<template>
  <footer>
    © {{ year }} Ben Booth
    | <a href="https://twitter.com/bkbooth11">Twitter</a>
    | <a href="https://github.com/bkbooth/star-wars-browser">GitHub</a>
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

<style scoped>
footer {
  background: var(--dark-background);
  color: var(--dark-background-text);
  font-size: .8rem;
  padding: 10px 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, .4);
  text-align: right;
}
footer a {
  color: var(--brand-primary);
}
</style>
