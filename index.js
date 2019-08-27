const base = require('./baseLintConfig');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    ...base.extend,
  ],
  parserOptions: base.parserOptions,
  env: base.env,
  rules: {
    ...base.rules,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],
  },
};
