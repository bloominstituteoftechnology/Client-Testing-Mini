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
    it('should have a length of 4', () => {
      expect(apples).to.have.lengthOf(4);
    });
    it('should include `red delicious`', () => {
      expect(apples).to.include('Red Delicious');
    })
    // write a test to check the correct length of the apples array.
    // write a test to check to see if the apples array contains 'Red Delicious'.
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should be Beastie Boys', () => {
      const Ben = cases.Ben;
      expect(Ben.favBand).to.equal('Beastie Boys');
    })
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should be pizza', () => {
      const Sean = caes.Sean;
      expect(Sean.favFood).to.equal('Pizza');
    })
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should not be Harry Potter', () => {
      const Ryan = cases.Ryan;
      expect(Ryan.favBook).to.not.equal('Harry Potter');
    })
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should not be gold', () => {
      const Austen = cases.Austen;
      expect(Austen.favColor).to.not.equal('Gold');
    })
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('should be rock climbing', () => {
      const Ivan = cases.Ivan;
      expect(Ivan.favActivity).to.equal('Rock Climbing');
    })
  });
});
