module.exports = {
  extends: 'gsc',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '16.0'
    }
  },
  rules: {
    'jsx-a11y/label-has-for': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'react/display-name': 2,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-key': 1,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-undef': 2,
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 'off',
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-unknown-property': 2,
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 1,
    'react/sort-comp': 2
  }
};
