const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('object'); // Begin here something is wrong, fix it.
    });
    it('should have a length of 4', () => {
      expect(apples.length).to.be.equal(4);
    });
    it('should contain \'Red Delicous\'', () => {
      expect(apples.includes('Red Delicious')).to.be.true;
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('array');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('number');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('string');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('function');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('function');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
});
