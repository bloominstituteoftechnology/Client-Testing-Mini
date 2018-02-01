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
    it('should have a length of 4', () => {
      expect(apples.length).to.have.lengthOf(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain the string `Red Delicious`', () => {
      const apples = cases.apples;
      expect(apples).to.include('Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have property favBand equal to `Beastie Boys`', () => {
      const favBand = cases.Ben.favBand;
      assert.typeOf(favBand, 'string');
      expect(favBand).to.equal('Beastie Boys', 'Ben\'s favorite band is the Beastie Boys');
      assert.equal(favBand, 'Beastie Boys', 'Ben\'s favorite band is the Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should have property favFood equal to `Pizza`', () => {
      const favFood = cases.Sean.favFood;
      assert.tyeOf(favFood, 'string');
      expect(favFood).to.equal('Pizza', 'Sean\'s favoritef food is Pizza');
      assert.equal(favFood, 'Pizza', 'Sean\'s favorite food is Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have a property favBook not equal to `Harry Potter`', () => {
      const favBook = cases.Ryan.favBook;
      assert.typeOf(favBook, 'string');
      expect(favBook).to.not.equal('Harry Potter',' Ryan\'s favorite book is not equal to Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should have property favColor not equal to `Gold`', () => {
      expect(Austenf.favColor).to.not.equal('Gold');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('should have property fanActivity is equal to `Rock Climbing`', () => {
      expect(Ivan.fanActivity).to.be.equal('Rock Climbing');
    });

  });
});
