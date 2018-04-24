const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('functions', () => {
  let testArray = [];
  beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
  };

  afterEach = () => {
    testArray = [];
  };

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
    it('3 plus 4 should equal 7', () => {
      // assert.equal(addNums(3,4), 8); // fail
      assert.equal(addNums(3,4), 7); // pass
      expect(addNums(3, 4)).to.equal(7);
      addNums(3,4).should.equal(7);
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
      //newCbInvoker(callBack);
      newCbInvoker(callBack);
      // pass our spy `callBack` to our newCbInvoker fn.
      // write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
      //expect(newCbInvoker(callBack).calledTwice).to.be.ok;
      expect(callBack.called).to.be.ok;
      sinon.assert.called(callBack);
      assert(callBack.called);
      //callBack.should.be.called
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      const iterator = cases.iterator;
      const n = 4;

      iterator(n, callBack);

      expect(callBack.callCount).to.equal(n);
    });
  });
});
