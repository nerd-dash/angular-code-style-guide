# My Angular coding style guide

This guide line has as a fallback the [ Angular coding style guide](https://angular.io/guide/styleguide), if you find something that this document does note cover please check it.

---

> **Legend :**<br>
> 🧑‍🔬🔎 - Requires manual verification<br>
> 🤖  - Has an automated process of verification<br>
> 👷  - Verification on process of automation<br>
> ❌  - Invalid, negative or bad practice<br>
> ✅  - Valid, positive, checked or good practice<br>

## Section 01 - Creating a Standard.

### Rule 01-01 - This document has the objective to create and enforce standards. 🧑‍🔬🔎

The code is easier to understand and maintain when every developer on the team writes it on the same manner. This way it easier to identify bug and solutions and provide automation to the code.

### Rule 01-02 - The code base should be written using USA English. 🧑‍🔬🔎

The standard English to be used on naming things is the USA English so some words that have slight different spelling don't get typos. _Ex :_ `color` and `colour`. _It´s recommended to use some kind of spell checker on your IDE to help not create typos on the code._

### Rule 01-03 - Never ignore a **warning** or **error** alert. 🧑‍🔬🔎

We are going to use every kind of technology, like _linters and scripts_, approved by the team to enforce the rules. It's recommended the usage of those tools on the IDE to help during the development to check code. There are also scripts that check the standards before you push the code to the repository. Every warning or error on those steps should be addressed before code being pushed.

## Section 02 - File Structures.

### Rule 02-01 - File naming convention. 🤖

Every file below `src/app` should have a suffix that describes the propose of this file.
This rule is an extension of [Angular's General Naming Guidelines](https://angular.io/guide/styleguide#general-naming-guidelines).

Every file that represent the following types like:

- `component`
- `directive`
- `module`
- `pipe`
- `service`
- `interface`
- `type`

Should be named with this pattern `<feature>.<type>.ts|html|scss|spec.ts` .

```typescript
// Eslint rules status = 👷

/**
 * This rule only applies for .ts files
 * and does not work yet with interface and type.
 * Also plan to add a validation to .html and .scss file.
 */

  extends: [
    "plugin:angular-file-naming/recommended"
    ...
  ],
```

### Rule 02-02 - Names have to be meaningful and give notion of what they represent. 🧑‍🔬🔎

> During **Pull Requests** review you should evaluate if the naming for members and type like give helps to understand the code. Methods and members alike should be verbs or give a notion of action.

### Rule 02-03 - Interfaces do NOT starts with the suffix 'I'. 🤖

```typescript
// Example

❌ export interface ITestCode {}

✅ export interface TestCode {}

// Eslint rules status = ✅
    rules: {
        ...
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: false,
            },
          }
        ],
      },
```

### Rule 02-04 - Enum members or keys have to be CONSTANT_CASE 🤖

```typescript
// Example

❌ export enum TestMember {
    aMember,
    anotherMember = 'another member'
}

✅ export enum TestMember {
    A_MEMBER,
    ANOTHER_MEMBER = 'another member'
}

// Eslint rules status = ✅
    rules: {
        ...
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "enumMember",
            format: ["UPPER_CASE"],
          },
        ],
      },
```

### Rule 02-05 - Class, interface and type members name have to be camelCase 🤖

```typescript
// Example

❌ export class TestClass {
  a_private_member = 0;
  AnotherMember = 1;
  LAST_MEMBER = 2;
}

✅ export class TestClass {
  aPrivateMember = 0;
  anotherMember = 1;
  lastMember = 2;
}

// Eslint rules status = ✅
    rules: {
        ...
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
        ],
      },
```

### Rule 02-06 - Class, interface and type name have PascalCase 🤖

```typescript
// Example

❌ export class _TEST_CLASS_ {}

❌ export class test-class {}

❌ export class TESTClass {} // Although is a valid Pascal case name.

✅ export class TestClass {
}

// Eslint rules status = ✅
    rules: {
        ...
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
```
