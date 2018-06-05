// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // always use dangling comma for multiline
    'comma-dangle': ['error', 'always-multiline'],
    // no space before function parens
    'space-before-function-paren': ['error', 'never'],
    // no unused variables (allow if preceeded by _)
    'no-unused-vars': ['error', {
      'args': 'after-used',
      'argsIgnorePattern': '^_',
      'vars': 'all',
      'varsIgnorePattern': '^_',
    }],
    // always use let or const
    'no-var': 'error',
  },
}
