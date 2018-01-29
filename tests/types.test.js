const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      assert.equal(Array.isArray(apples), true);
      // expect(apples).to.be.an('object'); // Begin here something is wrong, fix it.
    });
  });
    
    // write a test to check the correct length of the apples array.
    it('should have length of 4 or 5 if an item is added', () => {
      const apples = cases.apples
      assert.equal(apples.length, 4);
      const myNewArray = [...apples, 'watermelons'];
      assert.equal(myNewArray.length, 5);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should return -1 when the value is not present', () => {
      assert.equal(cases.apples.includes('Red Delicious'), true);
      assert.equal(cases.apples.includes('oreos'), false);
  
  });

  describe('Ben', () => {
    it.skip('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('array');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    it.skip('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('number');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    it.skip('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('string');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it.skip('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('function');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it.skip('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('function');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
});
