const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    const apples = cases.apples;
    it('should be an array', () => {
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of 4', () => {
      expect(apples).to.have.lengthOf(4)
    })
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain string Red Delicious', () => {
      assert.include(apples,'Red Delicious', 'array contains value');
    })
  });

  describe('Ben', () => {
    const Ben = cases.Ben;
    it('should be an object', () => {
      expect(Ben).to.be.an('object');
      it('favorite band should be Beastie Boys', () => {
        expect(Ben).to.have.property('favBand').equal('Beastie Boys')
      })
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    const Sean = cases.Sean;
    it('should be an object', () => {
      expect(Sean).to.be.an('object');
    });
    it('favorite foot should be pizza', () => {
      expect(Sean).to.have.property('favFood').equal('Pizza');
    })
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    const Ryan = cases.Ryan;
    it('should be an object', () => {
      expect(Ryan).to.be.an('object');
    });
    it('favorite book should not be Harry Potter', () => {
      expect(Ryan).to.have.property('favBook').not.equal('Harry Potter')
    })
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    const Austen = cases.Austen;
    it('should be an object', () => {
      expect(Austen).to.be.an('object');
    });
    it('favorite color should not be Gold', () => {
      expect(Austen).to.have.property('favColor').not.equal('Gold');
    })
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    const Ivan = cases.Ivan;
    it('should be an object', () => {
      expect(Ivan).to.be.an('object');
    });
    it('Favorite activity should be Rock Climbing', () => {
      expect(Ivan).to.have.property('favActivity').equal('Rock Climbing');
      })
    })
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
