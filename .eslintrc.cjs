module.exports = {
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "eslint-plugin-import",
    "prettier",
    "jest-dom",
  ],
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["tsconfig.eslint.json"],
  },
  ignorePatterns: [
    ".next/**/*",
    "public/**/*",
    "coverage/**/*",
    "cypress/**/*",
    ".eslintrc.cjs",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/function-component-definition": 0,
    "eol-last": "error",

    // Disabling typescript any
    "@typescript-eslint/no-explicit-any": 1,

    // Turning on the errors for the hooks problems
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    // Enforcing the separate import for the types
    // import type { Meeting } from ...
    // instead of
    // import { Meeting } from ...
    "@typescript-eslint/consistent-type-imports": "error",

    // Enforcing the destructuring
    // const { title, id } = meeting; => title || id
    // instead of
    // meeting.title || meeting.id
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
  },
};
