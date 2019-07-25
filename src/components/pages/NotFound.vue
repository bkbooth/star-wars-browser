<template>
  <page-wrapper hero-bg-color="red-dark">
    <template slot="hero">
      <div class="flex items-center">
        <div class="flex-no-shrink -ml-1 mr-4">
          <fa-icon :icon="['far', 'sad-tear']" class="text-3xl" />
        </div>
        <div class="flex-grow">
          <h1 class="font-starjedi">
            Page Not Found
          </h1>
        </div>
      </div>
    </template>

    <template slot="main">
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
