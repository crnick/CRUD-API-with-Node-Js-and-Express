/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports

// Describe blocks: Group related tests together
// It blocks: Individual test cases
// Setup/Teardown: beforeEach, afterEach, etc. for test isolation
// Assertions: Checking expected outcomes (status codes, response bodies)
// Async testing: Using async/await with Supertest
// don't manually test everything in your application
// automated tests could be run after you make changes and see if it breaks something.
// we need test runner ->executing test and sumarize results(mocha), assertion library(chai) and headless browser.
// jest is both a test runner and assetion library, does not support ES6 syntax
// headless browser -> simulates browser interaction
// depedencies mean it does not call any other function
// with supertest pull in your express application and simulate the request calls 
// will also adding assetions.
// for eg content type or content length
// provide a description for the test, want you want to test.


const { describe } = require("node:test")
const request = require("supertest")
const app = require("../index")
const {testingFunction,users} = require("../controllers/users")



//grouping tests related to the user
describe("User API",()=>{
    test("should output name and age",()=>{
        const text = testingFunction("nick",29)
        expect(text).toBe("the user name is nick and age is 29")
    })
   
    //handle when user is not found (GET)
    test('Handle user not found (GET) request', async () => {
        const res = await request(app).get('/users/notfound');
        expect(res.statusCode).toBe(404);
    });


     //handle when user is not found (DELETE)
     test('Handle user not found (DELETE)', async () => {
        const res = await request(app).delete('/users/notfound');
        expect(res.statusCode).toBe(404);
      });

    
})