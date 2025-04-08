/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {testingFunction} = require("../controllers/users")


// Describe blocks: Group related tests together
// It blocks: Individual test cases
// Setup/Teardown: beforeEach, afterEach, etc. for test isolation
// Assertions: Checking expected outcomes (status codes, response bodies)
// Async testing: Using async/await with Supertest
//don't manually test everything in your application
//automated tests could be run after you make changes and see if it breaks something.
// we need test runner ->exectuing test and sumarizign results(mocha), assertion library(chai) and headless browser.
//jest is both a test runner and assetion library, does not support ES6 syntax
//headless browser -> simulates browser interaction
//depedencies mean it does not call any other function

//provide a description for the test, want you want to test.
test("should output name and age",()=>{
    const text = testingFunction("nick",29)
    expect(text).toBe("the user name is nick and age is 29")
})
