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
    it('should return the sum of two numbers', () => {
      const sum = addNums(1, 2);
      expect(sum).to.be.equal(3);
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
     
  this
      newCbInvoker(callBack);
      expect(callBack).to.have.callCount(1);
    });
  });

  describe('iterator', () => {
    const iterator = cases.iterator;
    it('should be a function', () => {
      expect(iterator).to.be.a('function');
    });
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      iterator(5, callBack);
      expect(callBack).to.have.callCount(5);
    });
  });
});
