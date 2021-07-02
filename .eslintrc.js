// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'fp', // https://github.com/jfmengels/eslint-plugin-fp/tree/master/docs/rules
    'import', // https://github.com/benmosher/eslint-plugin-import
  ],
  rules: {
    'no-console': ['warn'],

    // fp eslint rules
    'fp/no-mutating-assign': 'warn',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',

    // Prettier rules
    'prettier/prettier': 'error',
  },
};
