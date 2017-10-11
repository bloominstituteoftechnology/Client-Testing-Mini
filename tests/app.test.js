const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
  const apples = cases.apples;
  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of four indeces', () => {
      expect(apples).to.have.lengthOf(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should have a string called "Red Delicious" ', () => {
      expect(apples).to.include('Red Delicious');
    });
  });

  describe('Ben', () => {
    const Ben = cases.Ben;
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have bens band equal to beastie boys', () => {
      expect(Ben.favBand).to.equal('Beastie Boys');
    });
  });

  describe('Sean', () => {
    const Sean = cases.Sean;
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should have Seans favorite food equal to Pizza', () => {
      expect(Sean.favFood).to.equal('Pizza');
    });
  });

  describe('Ryan', () => {
    const Ryan = cases.Ryan;
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have Ryans favBook not equal to Harry Potter', () => {
      expect(Ryan.favBook).to.not.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    const Austen = cases.Austen;
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should have Austens favColor not equal to Gold', () => {
      expect(Austen.favColor).to.not.equal('Gold');
    });
  });

  describe('Karthik', () => {
    const Karthik = cases.Karthik;
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should have Karthiks favActivity equal to Rock Climbing', () => {
      expect(Karthik.favActivity).to.equal('Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
    it('should equal 3 if 1 and 2 are given', () => {
      const addNums = cases.addNums;
      expect(addNums(1, 2)).to.equal(3);
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
      newCbInvoker(callBack);
      expect(callBack).to.have.been.calledOnce;
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    const iterator = cases.iterator;
    it('should be a function', () => {
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      iterator(5, callBack);
      expect(callBack).to.have.callCount(5);
    });
  });
});
