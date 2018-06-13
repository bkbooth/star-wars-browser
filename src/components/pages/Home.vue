<template>
  <div>
    <p>
      Welcome to the Star Wars Browser, a front-end for
      <a href="https://swapi.co/">The Star Wars API</a>
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
