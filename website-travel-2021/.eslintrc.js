module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "eslint-disable quotes": true,
    "eslint-disable react/jsx-no-target-blank": true,
    "eslint-disable no-unused-vars": true,
  },
};
