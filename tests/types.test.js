const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); 
    });
    // write a test to check the correct length of the apples array.
  describe('apples', () => {
    it('should be length four', () => {
      const apples = cases.apples;
      expect(apples).have.lengthOf(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
  describe('apples', () => {
    it('should contain Red Delicious', () => {
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
  });
  describe('Ben', () => {
    it('should have fav band is equal to Beastie Boys', () => {
      const favBand = cases.Ben.favBand; 
      assert.typeOf(favBand, 'string');
      expect(favBand).to.equal('Beastie Boys', 'Ben\'s favorite band');
      assert.equal(favBand, 'Beastie Boys', "Ben\'s favorite band is the Beastie Boys");
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  describe('Sean', () => {
      it('Sean\'s favorite food should be Pizza', () => {
        const favFood = cases.Sean.favFood;
        assert.typeOf(favFood, 'string');
        expect(favFood).to.equal('Pizza');
      });
    });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

    it('should be Ryans favBook is not Harry Potter', () => {
      const favBook = cases.Ryan.favBook;
      assert.typeOf(favBook, 'string');
      expect(favBook).to.not.equal('Ryans favBook is not Harry Potter');
    });
  });
});

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });
    it('favColor is not Gold', () => {
      const favColor = cases.Austen.favColor;
      assert.typeOf(favColor, 'string');
      expect(favColor).to.be.not.equal('Gold', 'Austen\'s favColor is not Gold');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
    it('favActivity is Rock Climbing', () => {
      const favActivity = cases.Ivan.favActivity;
      assert.typeOf(favActivity, 'string');
      expect(favActivity).to.equal('Rock Climbing', 'Ivan\'s favActivity is Rock Climbing');
      assert.equal(favActivity, 'Rock Climbing', 'Ivan\'s favorite activity is Rock Climbing');
    });
  });