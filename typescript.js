const base = require('./baseLintConfig');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [...base.plugins, '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: base.parserOptions,
  env: base.env,
  rules: {
    ...base.rules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
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
    },
  ],
};
