## eslint-config-gsc

[![CircleCI](https://circleci.com/gh/gospotcheck/eslint-config-gsc.svg?style=svg)](https://circleci.com/gh/gospotcheck/eslint-config-gsc)

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with GoSpotChecks coding style.

### Installation

To make use of this config, install ESLint (>= 5.8.0) and this package as a development dependency of your project:

    npm install eslint eslint-config-gsc --save-dev

Create a file named `.eslintrc.js` to your project's root directory. Copy and paste the code below and save.

```javascript
module.exports = {
  extends: "gsc"
};
```

### Profiles

The `eslint-config-gsc` package includes a number of ESLint configuration profiles for different types of projects.

#### Base JavaScript

The "base" config is suitable for JavaScript projects using `@babel/eslint-parser` parser.

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: "gsc"
};
```

#### React

The `gsc/react` config is suitable for projects using [React](https://facebook.github.io/react/).

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: ["gsc", "gsc/react"]
};
```

#### TypeScript

The `gsc/typescript` config is suitable for projects using [TypeScript](https://www.typescriptlang.org/).

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: "gsc/typescript"
};
```

#### TypeScript + React

Projects using both [TypeScript](https://www.typescriptlang.org/) and [React](https://facebook.github.io/react/) need this config.

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: ["gsc/typescript", "gsc/react"]
};
```

### Testing

Specific eslint configs for different types of testing frameworks.

#### Jest

The `gsc/jest` config is suitable for projects using [Jest](https://jestjs.io/).

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: ["gsc/jest"]
};
```

#### Cypress

The `gsc/cypress` config is suitable for projects using [Cypress](https://www.cypress.io/).

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: ["gsc/cypress"]
};
```

#### Jest + Cypress

Projects using both [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) need this config.

Example configuration in `.eslintrc.js`:

```javascript
module.exports = {
  extends: ["gsc/jest", "gsc/cypress"]
};
```

### Stylelinter

To use the stylelint configuration:

- Create a `stylelint.config.js`
- Add `module.exports = require('eslint-config-gsc/stylelint');`
