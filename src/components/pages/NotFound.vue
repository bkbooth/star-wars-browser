<template>
  <page-wrapper hero-bg-color="red-700">
    <template v-slot:hero>
      <div class="flex items-center">
        <div class="flex-shrink-0 -ml-1 mr-4">
          <fa-icon :icon="['far', 'sad-tear']" class="text-3xl" />
        </div>
        <div class="flex-grow">
          <h2 class="font-starjedi text-3xl mb-2">
            Page Not Found
          </h2>
        </div>
      </div>
    </template>

    <template v-slot:main>
      <p class="my-8">
        Sorry! I tried my hardest but I couldn't find the page you are looking for.
      </p>
      <p>
        <router-link to="/">
          <fa-icon :icon="['far', 'home']" />
          Go to the homepage
        </router-link>
      </p>
    </template>
  </page-wrapper>
</template>
