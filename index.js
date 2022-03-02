const base = require('./baseLintConfig');

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: base.plugins,
  parserOptions: base.parserOptions,
  env: base.env,
  rules: base.rules,
};
