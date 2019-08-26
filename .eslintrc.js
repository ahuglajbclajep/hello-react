module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: `${__dirname}/tsconfig.json` },
  // see https://github.com/yannickcr/eslint-plugin-react/issues/1955
  settings: { react: { version: "detect" } },
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    // see https://reactjs.org/docs/hooks-rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off"
  }
};
