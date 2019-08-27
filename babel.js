const base = require('./baseLintConfig');

module.exports = {
  parser: 'babel-eslint',
  extends: base.extend,
  parserOptions: base.parserOptions,
  env: base.env,
  rules: base.rules,
};
