<template>
  <div>
    <p>
      Welcome to the Star Wars Browser! A front-end for
      <a href="https://swapi.co/">The Star Wars API</a>.
      Except it's not quite that anymore,
      I ended up rolling my own API which pulls data from SWAPI.
    </p>
    <ul>
      <li><router-link to="/films">Films</router-link></li>
      <li><router-link to="/planets">Planets</router-link></li>
      <li><router-link to="/species">Species</router-link></li>
      <li><router-link to="/people">People</router-link></li>
      <li><router-link to="/starships">Starships</router-link></li>
      <li><router-link to="/vehicles">Vehicles</router-link></li>
    </ul>
  </div>
</template>
