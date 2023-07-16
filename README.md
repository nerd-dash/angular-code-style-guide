# My Angular coding style guide

This guide line has as a fallback the [ Angular coding style guide](https://angular.io/guide/styleguide), if you find something that this document does note cover please check it.

---

## Section 01 - File Structures

### Rule 01-01 - File namming convention
This rule is an extention of [Angular's file structure converntions](https://angular.io/guide/styleguide) but we are adding some extra rules.
```typescript

// Eslint rules status = 🛠️

@angular-eslint/recommended
```

#### Interfaces does not start with the suffix 'I'. 
```typescript
// Example

❌ export interface ISomeInterfaceName {}

✅ export interface SomeInterfaceName {}

// Eslint rules status = 🔧

@angular-eslint/recommended
```





### Rule - 02
Every `class` have to follow the member Class Naming Convention.

- The class name have to be `PascalCase`.
- Every member of the class have to be named using `camelCase`.
- Names have to be meaningfull and give notion of what it represents.
- Methods should give a notion of a verb or an action.

- #### General order overview:

  
