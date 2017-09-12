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
    // write a test to check the correct length of the apples array.
      assert.lengthOf(cases.apples, 4, 'array has length of 4');
      it('should contain a Red Delicious Apple', () => {
         expect(cases.apples).to.contain('Red Delicious');
    });
         
    // write a test to check to see if the apples array contains 'Red Delicious'.
    
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should contain a favorite band property and Beastie Boys key', () => {
      expect(cases.Ben).to.have.property('favBand', 'Beastie Boys');
    });

  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should contain a favFood property with a Pizza value', () => {
      expect(cases.Sean).to.have.property('favFood', 'Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should contain a favBook prop but not have Harry Potter as a value', () => {
      expect(cases.Ryan).to.not.have.property('favBook', 'Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should not contain a property of Gold for favColor', () => {
      expect(cases.Austen).to.not.have.property('favColor', 'Gold');
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should contain a favActivity prop with Rock Climbing as value', () => {
      expect(cases.Karthik).to.have.property('favActivity', 'Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should return the correct value', () => {
        const sum = cases.addNums(1, 2);
        expect(sum).to.equal(3);
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
      expect(callBack).to.have.been.called;
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const iterator = cases.iterator;
      const callBack = sinon.spy();
      iterator(2, callBack);
      expect(callBack).to.have.callCount(2);
    });
  });

  
});
