# Testing - Mini

Topics:

* Mocha
* Chai
* Sinon
* Assert
* Expect

## Project Description

* The objective is to get you exposed to unit testing with Mocha/Chai and Sinon.
* You will be writing tests for the code inside of `src/app.js`.

### Initialize Project

* cd into repo and run `yarn install` or `npm install`

### Pre Set Up

* You'll notice we have two directories `src` and `test`. Inside of `src/app.js & src/functions.js` you'll see all the code that we want to test, being exported out of the given files.
* Go ahead and run `yarn test` or `npm test` and it will execute the testing suites.
* We have installed a watch command that will re run on save.

### Steps for implementing Tests

* Step 1: You have a broken test suite already, go ahead and change each test assertion such that it passes the expected test. Everything begins on line 14 inside of `tests/types.test.js` begin there.
* Step 2: After you have all of your tests passing inside of `types.test.js` you can start testing the functions found in the `src/functions.js` file.
  * Write your testing code for these functions inside of `tests/functions.test.js`

### Resources

* [Mocha](https://mochajs.org/)
* [sinon-spy](https://github.com/domenic/sinon-chai)
* [Chai](http://chaijs.com/)
* [Assert](http://chaijs.com/api/assert/)
* [Expect](http://chaijs.com/api/bdd/)
* [BDD vs TDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/)
* [more on TDD vs BDD](http://chaijs.com/guide/styles/)
