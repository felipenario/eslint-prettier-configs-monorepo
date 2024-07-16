/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  extends: [
    "eslint:recommended",
    "@felipenario/eslint-config-react",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {},
  overrides: [
    {
      files: [
        "src/pages/**/*.tsx",
        "src/pages/**/*.ts",
        "src/app/**/layout.tsx",
        "src/app/**/page.tsx",
        "src/app/**/loading.tsx",
        "src/app/**/not-found.tsx",
        "src/app/**/error.tsx",
        "src/app/**/global-error.tsx",
        "src/app/**/template.tsx",
        "src/app/**/default.tsx",
      ],
      rules: {
        "react/function-component-definition": [
          "error",
          { namedComponents: "function-declaration" },
        ],
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
