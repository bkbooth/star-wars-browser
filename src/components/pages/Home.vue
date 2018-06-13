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
        <c-icon category="films" fixed-width/>
        <router-link to="/films">Films</router-link>
      </li>
      <li>
        <c-icon category="planets" fixed-width/>
        <router-link to="/planets">Planets</router-link>
      </li>
      <li>
        <c-icon category="species" fixed-width/>
        <router-link to="/species">Species</router-link>
      </li>
      <li>
        <c-icon category="people" fixed-width/>
        <router-link to="/people">People</router-link>
      </li>
      <li>
        <c-icon category="starships" fixed-width/>
        <router-link to="/starships">Starships</router-link>
      </li>
      <li>
        <c-icon category="vehicles" fixed-width/>
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
