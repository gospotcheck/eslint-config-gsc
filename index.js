const base = require('./baseLintConfig');

module.exports = {
  parser: 'babel-eslint',
  plugins: base.plugins,
  parserOptions: base.parserOptions,
  env: base.env,
  rules: base.rules,
};
