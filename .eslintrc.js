module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "linebreak-style": ["error", "windows"],
    "comma-dangle": ["error", { functions: "never" }],
    "no-console": "off"
  }
};
