const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    const apples = cases.apples;
    it('should be an array', () => {
      //expect(apples).to.be.an('object'); // Begin here something is wrong, fix it.
      expect(apples).to.be.an('array');
      assert.typeOf(apples, 'array');
      apples.should.be.an('array');
    });
    // write a test to check the correct length of the apples array.
    it('should be an array of length 4', () =>{
      expect(apples).to.have.lengthOf(4);
      assert.lengthOf(apples, 4);
      apples.should.have.lengthOf(4);
    })
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain Red Delicious', () => {
      expect(apples).to.include('Red Delicious')
      assert.include(apples, 'Red Delicious');
      apples.should.include('Red Delicious')
    });
  });

  describe('Ben', () => {
    const Ben = cases.Ben;
    it('should be an object', () => {
      expect(Ben).to.be.an('object');
      assert.typeOf(Ben,'object');
      Ben.should.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    const Sean = cases.Sean;
    it('should be an object', () => {
      expect(Sean).to.be.an('object');
      assert.typeOf(Sean, 'object');
      Sean.should.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('favorite food should be Pizza', () => {
      expect(Sean.favFood).to.be.equal('Pizza');
      assert.equal(Sean.favFood, 'Pizza');
      Sean.favFood.should.be.equal('Pizza');
    });
  });

  describe('Ryan', () => {
    const Ryan = cases.Ryan;
    it('should be an object', () => {
      expect(Ryan).to.be.an('object');
      assert.typeOf(Ryan, 'object');
      Ryan.should.be.an('object')
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('Ryan\'s favorite book should not be Harry Potter', () => {
      // expect(Ryan.favBook).to.not.equal('The Giver'); // fail
      expect(Ryan.favBook).to.not.equal('Harry Potter'); // pass
      assert.notEqual(Ryan.favBook, 'Harry Potter');
      Ryan.favBook.should.not.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    const Austen = cases.Austen;
    it('should be an object', () => {
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('Austen\'s favorite color should not be Gold', () => {
      assert.notEqual(Austen.favColor, 'Gold');
    });
  });

  describe('Ivan', () => {
    const Ivan = cases.Ivan;
    it('should be an object', () => {
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('Ivan\'s favorite activity should be Rock Climbing', () => {
      assert.equal(Ivan.favActivity, 'Rock Climbing');
    });
  });
});
