/** @type {import('@types/eslint').Linter.BaseConfig} */
const { resolve } = require("path");

module.exports = {
  ...require("eslint-config-react/react-package"),
  parserOptions: {
    project: resolve(__dirname, "tsconfig.json"),
  },
};
