const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const plugins = ['prettier'];

const extend = [
  'plugin:cypress/recommended',
  'plugin:jest/recommended',
  'plugin:jest/style',
];

const env = {
  browser: true,
  es6: true,
  jest: true,
  node: true,
};

const rules = {
  'brace-style': [2, '1tbs'],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-style': [2, 'last'],
  'default-case': 2,
  'dot-location': [2, 'property'],
  'no-debugger': 'warn',
  eqeqeq: [2, 'allow-null'],
  'generator-star-spacing': [2, 'after'],
  'guard-for-in': 2,
  'handle-callback-err': 0,
  indent: ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
  'keyword-spacing': [2, { after: true }],
  'new-cap': [2, { capIsNew: false }],
  'no-bitwise': 2,
  'no-cond-assign': [2, 'always'],
  'no-console': 1,
  'no-constant-condition': 0,
  'no-dupe-keys': 2,
  'no-floating-decimal': 2,
  'no-nested-ternary': 2,
  'no-path-concat': 0,
  'no-trailing-spaces': 2,
  'no-undef': 2,
  'no-underscore-dangle': 0,
  'no-unused-vars': 1,
  'no-use-before-define': [1, 'nofunc'],
  'no-var': 2,
  'object-curly-spacing': [2, 'always'],
  'object-shorthand': [2, 'always'],
  quotes: [2, 'single', 'avoid-escape'],
  radix: 2,
  'semi-spacing': 2,
  semi: 2,
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': ['error'],
  'spaced-comment': 0,
  'valid-jsdoc': [2, { requireReturn: false, requireReturnDescription: false }],
  'wrap-iife': 2,
};

module.exports = {
  parserOptions,
  plugins,
  extend,
  env,
  rules,
};
