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
    it('should have a length of 3', () => {
      const apples = cases.apples;
      // assert.equal(apples.length, 4);
      expect(apples).to.have.lengthOf(4);
    })
    // it('should have the string Red Delicious', () => {
    //   expect(apples).t
    // })
    // write a test to check the correct length of the apples array.
    // write a test to check to see if the apples array contains 'Red Delicious'.
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('favorite band should be Beatie boys', () => {
      const Ben = cases.Ben;
      assert.equal(Ben.favBand, 'Beastie Boys')
    })
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('Favorite food should be pizza', () => {
        const Sean = cases.Sean;
        assert.equal(Sean.favFood, 'Pizza');
    })
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('favorite book should not be Harry Potter', () => {
      const Ryan = cases.Ryan;
      assert.equal(Ryan.favBook.includes('Harry Potter'),false);
    })
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    it('favorite color should not be Gold', () => {
      const Austen = cases.Austen;
      assert.equal(Austen.favColor.includes('Gold'), false)
    })
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    it('favActivity should be Rock Climbing', () => {
      const Ivan = cases.Ivan;
      assert.equal(Ivan.favActivity, 'Rock Climbing')
    })
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
});
