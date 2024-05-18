/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Match only *.test.ts files to avoid the compiled *.test.js files
  testMatch: ["**/*.test.ts"]
};