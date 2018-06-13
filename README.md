# star-wars-browser

> A front-end for [The Star Wars API](https://swapi.co/)

Except it's not quite that anymore,
I ended up rolling my own API which pulls data from SWAPI.

## Frontend

Clone the repo and install dependencies

``` bash
git clone https://github.com/bkbooth/star-wars-browser.git
cd star-wars-browser
yarn
```

Start the dev server

``` bash
yarn start

## npm run dev
```

To build a static version into the _dist_ directory

``` bash
yarn build

#npm run build
```

## Server

With the main repo cloned, navigate to the _server_ directory and install dependencies

``` bash
cd server
yarn
```

Start the server

``` bash
# watches for changes and restarts server
yarn watch

# runs without watching/restarting
yarn start
```

Seed data into the SQLite database

``` bash
yarn seed
```

By default the seed script will not make requests to https://swapi.co,
it will load from locally cached JSON files.
To load fresh data from https://swapi.co (and regenerate the cached JSON files)

``` bash
rm data/*.json
yarn seed
```
