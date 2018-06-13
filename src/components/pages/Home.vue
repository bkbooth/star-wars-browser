<template>
  <div>
    <p>
      Welcome to the Star Wars Browser! A front-end for
      <a href="https://swapi.co/">The Star Wars API</a>.
      Except it's not quite that anymore,
      I ended up rolling my own API which pulls data from SWAPI.
    </p>
    <ul>
      <li>
        <fa-icon
          icon="film"
          fixed-width
        />
        <router-link to="/films">Films</router-link>
      </li>
      <li>
        <fa-icon
          icon="globe"
          fixed-width
        />
        <router-link to="/planets">Planets</router-link>
      </li>
      <li>
        <fa-icon
          icon="robot"
          fixed-width
        />
        <router-link to="/species">Species</router-link>
      </li>
      <li>
        <fa-icon
          icon="user"
          fixed-width
        />
        <router-link to="/people">People</router-link>
      </li>
      <li>
        <fa-icon
          icon="space-shuttle"
          rotation="270"
          fixed-width
        />
        <router-link to="/starships">Starships</router-link>
      </li>
      <li>
        <fa-icon
          icon="car"
          fixed-width
        />
        <router-link to="/vehicles">Vehicles</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
  }
</style>
