/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "import", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jest/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: ["tsconfig.json"],
  },
  rules: {
    "no-console": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [["builtin", "external", "internal"]],
      },
    ],
    "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  settings: {
    jest: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [
        ".ts",
        ".mts",
        ".cts",
        ".tsx",
        ".d.ts",
      ],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
