# My Angular coding style guide

This guide line has as a fallback the [ Angular coding style guide](https://angular.io/guide/styleguide), if you find something that this document does note cover please check it.

---

## Section 02 - File Structures

### Rule 02-01 - File namming convention

Every file below `src/app` should have a suffix that describes the propouse of this file.
This rule is an extention of [Angular's General Naming Guidelines](https://angular.io/guide/styleguide#general-naming-guidelines). 

Every file that represent the folloing types:

 - component
 - directive
 - module
 - pipe
 - service
 - interface
 - type

Should be named with this parttern `<feature>.<type>.ts|html|scss|spec.ts` .  

```typescript
// Eslint rules status = 🛠️

/**
 * This rule only applies for .ts files
 * and does not work yet with interface and type.
 * Also plan to add a validation to .html and .scss file.
 */ 

  extends: [
    "plugin:@angular-eslint/recommended",
    ...
  ],
```

#### Interfaces do NOT starts with the suffix 'I'.

```typescript
// Example

❌ export interface ISomeInterfaceName {}

✅ export interface SomeInterfaceName {}

// Eslint rules status = 🔨
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

#### Enum members or keys have to be CONSTANT_CASE

```typescript
// Example

❌ export enum TestEnum {
    aMember,
    anotherMember = 'another member'
}

✅ export enum TestEnum {
    A_MEMBER,
    ANOTHER_MEMBER = 'another member'
}

// Eslint rules status = 🔨
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

#### Class, interface and type members name have to be camelCase

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

// Eslint rules status = 🔨
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

Every `class` have to follow the member Class Naming Convention.

- The class name have to be `PascalCase`.
- Every member of the class have to be named using `camelCase`.
- Names have to be meaningfull and give notion of what it represents.
- Methods should give a notion of a verb or an action.

- #### General order overview:
