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
    it('should be the sum', () => {
      const results = cases.addNums(1, 2);
      expect(results).to.equal(3);
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
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      const iterator = cases.iterator;
      iterator(10, callBack);
      expect(callBack).to.have.callCount(10);
    });
  });

  describe('each', () => {
    const each = cases.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should pass values back from array to callback', () => {
      const nums = [1, 2, 3];
      const expectedOutPut = [];
      const eachCallback = (element, index) => {
        expectedOutPut.push(element + 1);
      };
      each(nums, eachCallback);
      expect(expectedOutPut).to.deep.equal([2 ,3 ,4]);
    });
    it('should iterate x number of times for the given length of an array', () => {});
      const nums = [1, 2, 3]
      const length = nums.length;
      const spy = sinon.spy();
      each(nums, spy);
      expect(spy).to.have.callCount(nums.length);
    });
  });
});
