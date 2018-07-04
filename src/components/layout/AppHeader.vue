<template>
  <header>
    <div class="container mx-auto">
      <router-link to="/" class="font-starjedi text-lg">
        <fa-layers class="mr-3">
          <fa-icon
            icon="circle"
            transform="grow-8 right-3"
          />
          <fa-icon
            :icon="['fab', 'rebel']"
            transform="grow-4 right-3"
            class="text-blue-darker"
          />
        </fa-layers>
        Star Wars Browser
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
