module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        // example configuration
        newlinesBetween: "always", // new line between groups
        groups: ["/^react/", "module", "/^@/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    quotes: [2, "double", { avoidEscape: true }],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/prefer-default-export": "off",
    "jsx-quotes": ["error", "prefer-single"],
  },
};
