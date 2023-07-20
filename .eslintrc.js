module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:angular-file-naming/recommended",
      ],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/member-ordering": "error",
      },
      overrides: [
        {
          files: ["*.ts"],
          rules: {
            "@typescript-eslint/naming-convention": [
              "error",
              {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                  regex: "^I[A-Z]",
                  match: false,
                },
              },
              {
                selector: "enumMember",
                format: ["UPPER_CASE"],
              },
              {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
              },
              {
                selector: "variable",
                format: ["camelCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
              },
              {
                selector: "typeLike",
                format: ["PascalCase"],
              },
            ],
            
          },
        },
      ],
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
  ],
};
