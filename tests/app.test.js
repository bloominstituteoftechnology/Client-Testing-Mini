const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => {
  describe('apples', () => {
    let newApples = [];
    beforeEach( () => {
      newApples.push('red', 'green', 'yellow');
    });
    afterEach(() => {
      newApples = [];
    });
      const apples = cases.apples;
      it('should be an array', () => {
      expect(newApples).to.be.an('array');
    });
    it('should have a length of 4 indices', () => {
      expect(apples).to.have.lengthOf(4);
    });
    it('should have a string called "Red Delicious" ', () => {
        expect(apples).to.include('Red Delicious');
        console.log(newApples);
    });

  describe('Ben', () => {
    const Ben = cases.Ben;
    it('should be an object', () => {
      expect(Ben).to.be.an('object');
    });
    it('should have Bens fave band equal to Beastie Boys', () => {
      expect(Ben.favBand).to.equal('Beastie Boys');
    });
      // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe('Sean', () => {
    const Sean = cases.Sean;
    it('should be an object', () => {
      expect(Sean).to.be.an('object');
    });
    it('should have Seans fave food equal to pizza', () => {
      expect(Sean.favFood).to.equal('Pizza');
    });
    //favFood/ write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    const Ryan = cases.Ryan;
    it('should be an object', () => {
      expect(Ryan).to.be.an('object');
    });
    it('should have Ryans fave book not equal to Harry Potter', () => {
      expect(Ryan.favBook).to.not.equal('Harry Potter');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    const Austen = cases.Austen;
    it('should be an object', () => {
      expect(Austen).to.be.an('object');
    });
    it('should have Austens fave color not equal to gold', () => {
      expect(Austen.favColor).to.not.equal('Gold');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Karthik', () => {
    const Karthik = cases.Karthik;
    it('should be an object', () => {
      expect(Karthik).to.be.an('object');
    });
    it('should have Karthiks fave activity equal to rock climbing', () => {
      expect(Karthik.favActivity).to.equal('Rock Climbing');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
  });

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
      });
      it('should equal 3 if 1 and 2 are given', () => {
        expect(addNums(1,2)).to.equal(3);
      });
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
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
      newCbInvoker(callBack);
      newCbInvoker(callBack);
      expect(callBack).to.have.been.calledThrice;
    });
  });
// hint - you will need to look at
// https://github.com/domenic/sinon-chai to see syntax around this

  describe('iterator', () => {
    const iterator = cases.iterator;
    it('should be a function', () => {
      expect(iterator).to.be.a('function');
    });
    // similar to above where we are utilizing our spy from sinon,
    // this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      let callBack = sinon.spy();
      iterator(5, callBack);
      expect(callBack).to.have.callCount(5);
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
