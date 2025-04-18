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
const {testingFunction,createUser} = require("../controllers/users")


//grouping tests related to the user
describe("User API",()=>{
    test("should output name and age",()=>{
        const text = testingFunction("nick",29)
        expect(text).toBe("the user name is nick and age is 29")
    })
    test("POST /user --> create user",async ()=>{
        const userData = {
            name: 'Test User',
            email: 'test@example.com',
          };
      
          const response = await request(app)
            .post('/users')
            .send(userData)
            .expect(201); 
      
          // Check if response contains expected fields
          expect(response.body).toEqual({
            message:`User added successfully`
          });
    })
    

    // test("GET /user/id --> get specific user by id",()=>{
        
    // })
    // test("DELETE /user/id --> delete the specific user by id",()=>{
       
    // })
    // test("GET /user/id --> 404 if user not found",()=>{
       
    // })


    // test("PUT /user/id --> updates the specific user by id",()=>{
       
    // })
})