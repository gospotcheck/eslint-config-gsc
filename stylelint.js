module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier'
  ],
  rules: {
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 'vw', 'vh', 's', '%'],
    'indentation': 2
  }
};