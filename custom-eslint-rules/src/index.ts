import { noFocusedGherkinRule } from "./rules/no-focused-gherkin";
import type {AnyRuleModule} from "@typescript-eslint/utils/ts-eslint";

export const rules = {
    "no-focused-gherkin": noFocusedGherkinRule
} satisfies Record<string, AnyRuleModule>;