<template>
  <page-wrapper hero-bg-color="red-dark">
    <template slot="hero">
      <h1 class="font-starjedi">
        <fa-icon :icon="['far', 'exclamation-triangle']"/>
        Page Not Found
      </h1>
    </template>

    <template slot="main">
      <p>Sorry! We couldn't find the page you are looking for.</p>
      <p><router-link to="/">Go to home</router-link></p>
    </template>
  </page-wrapper>
</template>
