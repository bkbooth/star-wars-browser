export const CATEGORIES = ['films', 'characters', 'species', 'planets', 'starships', 'vehicles']

const FIXED_COLORS = ['transparent', 'black', 'white']
const BASE_COLORS = ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']
const COLOR_SHADES = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest']
const ALL_COLOR_SHADES = BASE_COLORS.reduce(
  (colors, color) => [...colors, ...COLOR_SHADES.map(shade => `${color}-${shade}`)],
  []
)
export const COLORS = [...FIXED_COLORS, ...BASE_COLORS, ...ALL_COLOR_SHADES]
