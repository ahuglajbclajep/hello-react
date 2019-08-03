module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: `${__dirname}/tsconfig.json` },
  plugins: ["@typescript-eslint"],
  // see https://github.com/yannickcr/eslint-plugin-react/issues/1955
  settings: { react: { version: "detect" } },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/prefer-interface": "off", // deprecated
    "react/prop-types": "off"
  }
};
