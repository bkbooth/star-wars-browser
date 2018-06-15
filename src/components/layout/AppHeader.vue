<template>
  <header>
    <router-link to="/" class="font-starjedi text-lg">
      <fa-layers class="mr-2">
        <fa-icon
          icon="circle"
          transform="grow-8"
        />
        <fa-icon
          :icon="['fab', 'rebel']"
          transform="grow-4"
          class="text-blue-darker"
        />
      </fa-layers>
      Star Wars Browser
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
