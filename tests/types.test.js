const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have length of 4', () => {
      const apples = cases.apples;
      assert.lengthOf(apples, 4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain `Red Delicious`', () => {
      const apples = cases.apples;
      assert.include(apples, 'Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should contain favBand: `Beastie Boys`', () => {
      const Ben = cases.Ben;
      assert.equal(Ben.favBand, 'Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should contain favFood: `Pizza`', () => {
      const Sean = cases.Sean;
      assert.equal(Sean.favFood, 'Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should not contain favFood: `Harry Potter`', () => {
      const Ryan = cases.Ryan;
      assert.notEqual(Ryan.favFood, 'Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should not contain favColor: `Gold`', () => {
      const Austen = cases.Austen;
      assert.notEqual(Austen.favColor, 'Gold');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('should contain favActivity: `Rock Climbing`', () => {
      const Ivan = cases.Ivan;
      assert.equal(Ivan.favActivity, 'Rock Climbing');
    });
  });
});
