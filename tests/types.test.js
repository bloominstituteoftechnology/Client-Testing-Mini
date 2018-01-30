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
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should include string `Red Delicious`', () => {
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
    it('should have favorite band Beastie Boys', () => {
      const Ben = cases.Ben;
      expect(Ben).to.have.property('favBand').to.equal('Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should have favorite food Pizza', () => {
      const Sean = cases.Sean;
      expect(Sean).to.have.property('favFood').to.equal('Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have favorite book not Harry Potter but The Giver', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.have.property('favBook').to.not.equal('Harry Potter');
      expect(Ryan).to.have.property('favBook').to.equal('The Giver');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should have favorite color not Gold but Silver', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.have.property('favBook').to.not.equal('Gold');
      expect(Ryan).to.have.property('favColor').to.equal('Silver');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('should have favorite activity Rock Climbing', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.have.property('favActivity').to.equal('Rock Climbing');
    });
  });
});
