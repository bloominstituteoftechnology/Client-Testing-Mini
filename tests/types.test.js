const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require(sinon-chai)
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    it('should have a length of 4', () => {
      expect(apples).to.have.lengthOf.(4);
    });
    it('should contain the string `Red Delicious`', () => {
      expect(apples).to.include.('Red Delicious');
    });
    // write a test to check the correct length of the apples array.
    // write a test to check to see if the apples array contains 'Red Delicious'.
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should have prop favBand equal to `Beastie Boys`', () => {
      const favBand = cases.Ben.favBand;
      assert.typeOf(favBand, 'string');
      expect(favBand).to.equal('Beastie Boys', 'Ben\s favorite band is the Beastie Boys');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('should have prop favFood equal to `Pizza`', () => {
      const favFood = cases.Sean.favFood;
      assert.typeOf(favFood, 'string');
      expect(favFood).to.equal('Pizza', 'Sean\'s favorite food is Pizza');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
 

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('should have prop favBook not equal to `Harry Potter`', () => {
      const favBook = cases.Ryan.favBook;
      assert.typeOf(favBook, 'string');
      expect(favBook).to.not.equal('Harry Potter', 'Ryan\'s favorite book is not Harry Potter');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen.favColor;
      expect(Austen).to.be.an('object');
    });
    it('should have prop favColor not equal to `Gold`');
    const favColor = cases.Austen.favColor;
    assert.typeOf(favColor, 'string');
    expect(favColor).to.not.equal('Gold', 'Austen\'s favorite color is not Gold');
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    it('should have prop favActivity equal to `Rock Climbing`');
    const favActivity = cases.Ivan.favActivity;
    assert.typeOf(favActivity, 'string');
    expect(favActivity).to.equal('Rock Climbing', 'Ivan\'s favorite activity is Rock Climbing');

    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
  });
