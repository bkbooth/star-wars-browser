const { theme: { colors } } = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-tables')({
      tableBorderColor: colors['gray']['400'],
      tableStripedBackgroundColor: colors['gray']['100'],
      tableHoverBackgroundColor: colors['blue']['100'],
    }),
  ],
}
