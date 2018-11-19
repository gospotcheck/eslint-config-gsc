module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-order'
  ],
  rules: {
    'block-no-empty': null,
    'declaration-block-no-redundant-longhand-properties': true,
    'plugin/no-low-performance-animation-properties': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-whitelist': ['em', 'rem', 'vw', 'vh', 's', '%']
  }
};
