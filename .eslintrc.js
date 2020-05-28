"use strict";

const eslintrc = {
  extends: ["eslint-config-airbnb/base"],
  env: {
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["babel"],
  rules: {
    indent: ["error", 2],
    "object-curly-newline": ["error", { consistent: true }],
    "no-use-before-define": ["error", { functions: false, classes: false }],
    quotes: "double",
    "arrow-body-style": 0,
    "import/no-dynamic-require": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "max-len": 0,
    "no-plusplus": 0,
    "consistent-return": 0,
    "no-redeclare": 0,
    "linebreak-style": 0,
    "global-require": 0,
    "arrow-parens": 0,
    indent: 0,
    "comma-dangle": 0,
    "no-useless-escape": 0,
  },
};

module.exports = eslintrc;
