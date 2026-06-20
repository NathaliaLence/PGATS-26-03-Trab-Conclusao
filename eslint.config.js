import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules/", "reports/"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
