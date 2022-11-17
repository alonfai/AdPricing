## Ad Pricing Demo Application

---

This project was is bootstrapped to include basic Node.js (18.x) environment.

It showcase an app for an ads checkout system. We want to offer different products to recruiters. There is a pre-defined
setup of special pricing plans to a small number of privileged customers. These set of rules are regularly negoitated, so
the data structure needed to be flexible as possible so changes can be made with little notice or an effect on the code base.

---

## NPM modules used

In this project, the main `npm` modules used are

- Typescript
- Jest
- Yarn
- ESLint + Prettier
- Husky with git hooks support

---

## Pre-Requirements

Make sure you have node 18.x release on your machine. You can use [nvm](https://github.com/nvm-sh/nvm) to access different node releases. From the project root folder run `nvm use` to execute the recommended Node.js release
This app was tested with Node.js 18.12.1 release

---

## Install

Clone the project and install necessary modules using [Yarn package manager](https://classic.yarnpkg.com/en/docs/install):

```
yarn install
```

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development/watch mode.

## `yarn test`

Launches the test environment with Jest

### `yarn test:watch`

Launches the test environment in watch mode

### `yarn test:coverage`

Launches the Jest test runner in coverage mode. It has an integrated coverage reporter that works well with ES6 and requires no configuration.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn lint`

Executes `eslint` linter

### `yarn format`

Executes `eslint` linter and with auto fix mode on

### `yarn prettier`

Executes the `prettier` formatting module

### `yarn lint:full`

Executes the `prettier` and `lint` scripts together
