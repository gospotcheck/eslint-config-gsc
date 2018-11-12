## eslint-config-gsc

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with GoSpotChecks coding style.

### Installation

To make use of this config, install ESLint (>= 5.8.0) and this package as a development dependency of your project:

    npm install eslint eslint-config-gsc --save-dev

Create a file named `.eslintrc.js` to your project's root directory. Copy and paste the code below and save.

```javascript
module.exports = {
  "extends": "gsc"
};
```

### Profiles

The `eslint-config-gsc` package includes a number of ESLint configuration profiles for different types of projects.

#### `gsc` (base config)

The "base" config is suitable for JavaScript projects.

Example configuration in `.eslintrc.js`:
```javascript
module.exports = {
  "extends": "gsc"
};
```

#### `gsc/react`

The `gsc/react` config is suitable for projects using [React](https://facebook.github.io/react/).

Example configuration in `.eslintrc.js`:
```javascript
module.exports = {
  "extends": "gsc/react"
};
```

### Stylelinter

To use the stylelint configuration:
- Create a `stylelint.config.js`
- Add `module.exports = require('eslint-config-gsc/stylelint');`
