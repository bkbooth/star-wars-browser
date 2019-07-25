<template>
  <header>
    <div class="container mx-auto">
      <h1 class="font-starjedi text-lg">
        <router-link to="/">
          <fa-layers class="mr-3">
            <fa-icon
              icon="circle"
              transform="grow-8 right-3"
            />
            <fa-icon
              :icon="['fab', 'rebel']"
              transform="grow-4 right-3"
              class="text-blue-900"
            />
          </fa-layers>
          Star Wars Browser
        </router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
