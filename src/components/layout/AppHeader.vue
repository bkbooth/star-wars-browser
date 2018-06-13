<template>
  <header>
    <router-link to="/" class="brand">
      <fa-icon :icon="['fab', 'rebel']"/>
      Star Wars Browser
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
header {
  background: var(--dark-background);
  color: var(--dark-background-text);
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .4);
}
header a {
  color: var(--brand-primary);
}

.brand {
  text-transform: uppercase;
  text-decoration: none;
  color: var(--dark-background-text);
  font-weight: bold;
}
</style>
