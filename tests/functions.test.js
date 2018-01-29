const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

  describe('each', () => {
  let testArray = [];
  beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
  });

  afterEach = () => {
    testArray = [];
  };

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    
  describe('addNums(1, 2)', () => {
    const addNums = cases.addNums(1, 2); 
    it('should return the proper output', () => {
      expect(addNums(1, 2)).to.be.a('function returning 3');
});

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('number');
    });
    it('should invoke a given callback passed to it', () => {
      const callBack = sinon.spy();
      expect (sinon.spy).to.be.a('newCbInvoker');
    });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
 
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = cases.iterator; 
      expect(callback).to.be.a('callback called x times')
  });
});
