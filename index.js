const base = require('./baseLintConfig');

module.exports = {
  parser: 'babel-eslint',
  plugins: base.plugins,
  extends: base.extend,
  parserOptions: base.parserOptions,
  env: base.env,
  rules: base.rules,
};
