export const CATEGORIES = ['films', 'characters', 'species', 'planets', 'starships', 'vehicles']

const FIXED_COLORS = ['transparent', 'black', 'white']
const BASE_COLORS = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']
const COLOR_SHADES = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
const ALL_COLOR_SHADES = BASE_COLORS.reduce(
  (colors, color) => [...colors, ...COLOR_SHADES.map(shade => `${color}-${shade}`)],
  []
)
export const COLORS = [...FIXED_COLORS, ...ALL_COLOR_SHADES]
