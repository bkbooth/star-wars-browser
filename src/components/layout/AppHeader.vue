<template>
  <header class="bg-blue-darker text-grey-lightest p-6 shadow-md">
    <router-link to="/" class="uppercase no-underline font-bold tracking-wide">
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
