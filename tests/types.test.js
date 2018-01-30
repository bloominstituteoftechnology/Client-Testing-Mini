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
    describe('apples', () => {
      it('the length should be 4', () => {
        const apples = cases.apples;
        expect(apples.length).to.equal(4);
      });
    });
    // write a test to check the correct length of the apples array.
    describe('apples', () => {
      it('should contain Red Delicious', () => {
        const apples = cases.apples;
        expect(apples).includes('Red Delicious', true);
      })
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    describe('Ben', () => {
      const Ben = cases.Ben;
      it('should check if Bens fav band is Beastie Boys', () => {
        expect(Ben.favBand).to.equal('Beastie Boys');
      })
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    describe('Sean', () => {
      it('should check and see if Seans fav food is the strinf Pizza', () => {
        const Sean = cases.Sean;
        expect(Sean.favFood).to.equal('Pizza');

      });
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    describe('Ryan', () => {
      it("should not have Harry Potter as Ryan's favorite book", () => {
        const Ryan = cases.Ryan;
        expect(Ryan.favBook).to.not.equal('Harry Potter');
      });
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    describe('Austen', () => {
      it("should not have the string 'gold' as Ryan's favorite book", () => {
        const Austen = cases.Austen;
        expect(Austen.favColor).to.not.equal('Gold');
      });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'. describe('Ryan', () => {
    describe('Ivan', () => {
      it("should the string 'Rock Climbing' as Ivan's favorite activity", () => {
        const Ivan = cases.Ivan;
        expect(Ivan.favActivity).to.equal('Rock Climbing');
      });
      });
    });
  })
});
