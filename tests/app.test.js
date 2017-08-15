const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
    
  describe('apples', () => {
    
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    it('should have length of 4', () => {
      const apprs = cases.apples;
      expect(apprs).to.have.lengthOf(4);
    });
    it('should contain the string `Red Delicious`', () => {
      const apples = cases.apples;
      expect(apples).to.include('Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should have prop favBand equal to `Beastie Boys`', () => {
      const favBand = cases.Ben.favBand;
      assert.typeOf(favBand, 'string');
      expect(favBand).to.equal('Beastie Boys', 'Ben\'s favorite band is the Beastie Boys');
      assert.equal(favBand, 'Beastie Boys', 'Ben\'s favorite band is the Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    it('should add up two numbers passed to it', () => {
      const result = cases.addNums(1, 2);
      expect(result).to.equal(3);
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    
    it('should invoke a given callback passed to it', () => {
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      newCbInvoker(callBack);
      expect(callBack).to.have.been.calledOnce;
    });

  });

  describe('iterator', () => {

    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });

    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      const iterator = cases.iterator;
      iterator(4, callBack);
      expect(callBack).to.have.callCount(4);
    });
  });

  
});
