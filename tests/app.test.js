const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

/* AAA testing process example...
// A: Arrange => setup 
const expectedValue = 6;
const firstVal = 4;
const secondVal = 3;

//A: Act => execute
const actualVal = addNums(firstVal, secondVal);

//A: Assert => 
assert(actualVal).to.be.equal(expectedValue);
*/

describe('Cases from app.js', () => { // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have 4 elements', () => {
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain "Red Delicious"', () => {
      const apples = cases.apples;
      expect(apples).to.contain('Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have favorite band to be "Beastie Boys"', () => {
      const favBand = cases.Ben.favBand;
      expect(favBand).to.be.equal('Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should have favorite food to be "Pizza"', () => {
      const favFood = cases.Sean.favFood;
      expect(favFood).to.be.equal('Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have favorite book NOT be "Harry Potter"', () => {
      const favBook = cases.Ryan.favBook;
      expect(favBook).to.not.be.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should have favorite color NOT be "Gold"', () => {
      const favColor = cases.Austen.favColor;
      expect(favColor).to.not.be.equal('Gold');
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should have favActivity be "Rock Climbing"', () => {
      const favActivity = cases.Karthik.favActivity;
      expect(favActivity).to.be.equal('Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
    it('should return 7 when passed 4 and 3', () => {
      const addNums = cases.addNums;
      expect(addNums(4, 3)).to.be.equal(7);
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
      newCbInvoker(callBack);
      expect(callBack).to.have.been.calledOnce;
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    // similiar to above where we are utilizing our spy from sinon,
    // this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const cb = sinon.spy();
      const myIterator = cases.iterator;
      const n = 5;
      myIterator(n, cb);
      expect(cb).to.have.been.callCount(n);
    });
  });
});
