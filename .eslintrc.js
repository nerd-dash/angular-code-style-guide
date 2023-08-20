module.exports = {
  root: true,
  plugins: ["project-structure"],
  rules: {
    "project-structure/file-structure": "error", // warn | error
  },
  settings: {
    "project-structure/config-path": ".projectStructurerc.json",
  },
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
        "prettier",
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
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: {
              memberTypes: [
                // Index signature
                "signature",
                "call-signature",

                // Fields
                "public-static-field",
                "protected-static-field",
                "private-static-field",
                "#private-static-field",

                "public-decorated-field",
                "protected-decorated-field",
                "private-decorated-field",

                "public-instance-field",
                "protected-instance-field",
                "private-instance-field",
                "#private-instance-field",

                "public-abstract-field",
                "protected-abstract-field",

                "public-field",
                "protected-field",
                "private-field",
                "#private-field",

                "static-field",
                "instance-field",
                "abstract-field",

                "decorated-field",

                "field",

                // Static initialization
                "static-initialization",

                // Constructors
                "public-constructor",
                "protected-constructor",
                "private-constructor",

                "constructor",

                // Getters
                "public-static-get",
                "protected-static-get",
                "private-static-get",
                "#private-static-get",

                "public-decorated-get",
                "protected-decorated-get",
                "private-decorated-get",

                "public-instance-get",
                "protected-instance-get",
                "private-instance-get",
                "#private-instance-get",

                "public-abstract-get",
                "protected-abstract-get",

                "public-get",
                "protected-get",
                "private-get",
                "#private-get",

                "static-get",
                "instance-get",
                "abstract-get",

                "decorated-get",

                "get",

                // Setters
                "public-static-set",
                "protected-static-set",
                "private-static-set",
                "#private-static-set",

                "public-decorated-set",
                "protected-decorated-set",
                "private-decorated-set",

                "public-instance-set",
                "protected-instance-set",
                "private-instance-set",
                "#private-instance-set",

                "public-abstract-set",
                "protected-abstract-set",

                "public-set",
                "protected-set",
                "private-set",
                "#private-set",

                "static-set",
                "instance-set",
                "abstract-set",

                "decorated-set",

                "set",

                // Methods
                "public-static-method",
                "protected-static-method",
                "private-static-method",
                "#private-static-method",

                "public-decorated-method",
                "protected-decorated-method",
                "private-decorated-method",

                "public-instance-method",
                "protected-instance-method",
                "private-instance-method",
                "#private-instance-method",

                "public-abstract-method",
                "protected-abstract-method",

                "public-method",
                "protected-method",
                "private-method",
                "#private-method",

                "static-method",
                "instance-method",
                "abstract-method",

                "decorated-method",

                "method",
              ],
              order: "alphabetically",
            },
          },
        ],
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
