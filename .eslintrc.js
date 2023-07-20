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
      plugins: ["rxjs", "rxjs-angular"],
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
        "@typescript-eslint/member-ordering": "error",
        "rxjs/finnish": [
          "error",
          {
            functions: true,
            methods: true,
            parameters: true,
            properties: true,
            variables: true,
            strict: false,
            types: {
              "^EventEmitter$": false,
              "^Subject$": false,
            },
          },
        ],
        "rxjs-angular/prefer-async-pipe": "error",
        "rxjs/suffix-subjects": [
          "error",
          {
            functions: true,
            methods: true,
            parameters: true,
            properties: true,
            variables: true,

            suffix: "Subject",
            types: {
              "^EventEmitter$": false,
            },
          },
        ],
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
  ],
};
