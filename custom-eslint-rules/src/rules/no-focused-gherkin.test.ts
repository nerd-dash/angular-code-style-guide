import { RuleTester } from "@typescript-eslint/rule-tester";
import { noFocusedGherkinRule } from "./no-focused-gherkin";

// Creation of a RuleTester
const ruleTester = new RuleTester({
  // Resolves the direct path to the package in node_modules
  parser: "@typescript-eslint/parser",
});

ruleTester.run("no-focused-gherkin", noFocusedGherkinRule, {
  valid: ['given("", () => {})', "console.only('hello')"],
  invalid: [
    {
      code: 'given.only("", () => {})',
      errors: [{ messageId: "focused" }],
    },
    {
      code: `
        given("", () => {
          when.only()
        })
      `,
      errors: [{ messageId: "focused" }],
    },
  ],
});
