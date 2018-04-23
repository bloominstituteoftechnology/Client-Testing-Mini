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
    it('should be have a length of 4', () => {
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    })
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain "Red Delicious" ', () => {
      const apples = cases.apples;
      expect(apples).to.contain('Red Delicious');
    })
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should be equal to Beastie Boys ', () => {
      const BenFavBand = cases.Ben.favBand;
      expect(BenFavBand).to.equal('Beastie Boys')
    })
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should be equal to Pizza', () => {
      const SeanfavFood = cases.Sean.favFood;
      expect(SeanfavFood).to.equal('Pizza');
    })
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should not equal "Harry Potter" ', () => {
      const RyanfavBook = cases.Ryan.favBook;
      expect(RyanfavBook).to.not.equal('Harry Potter');
    });

  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should not equal Gold', () => {
      const AustenfavColor = cases.Austen.favColor;
      expect(AustenfavColor).to.not.equal('Gold');
    })
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('should be equal to Rock Climbing', () => {
      const IvanfavActivity = cases.Ivan.favActivity;
      expect(IvanfavActivity).to.equal('Rock Climbing');
    })
  });
});
