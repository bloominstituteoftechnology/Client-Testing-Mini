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
    it('should have 4 elements', () => {
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    })
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain red delicious', () => {
      const apples = cases.apples;
      const apple = 'Red Delicious';
      expect(apples).to.include(apple);
      
    })
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should check favorite band is beastie boys', () => {
      const band = 'Beastie Boys';
      const { favBand } = cases.Ben;
      expect(favBand).to.equal(band)
    })
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should check favorite food is Pizza', () => {
      const food = 'Pizza';
      const { favFood } = cases.Sean;
      expect(favFood).to.equal(food);
    })
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('favorite book should not be harry potter', () => {
      const book = 'Harry Potter';
      const { favBook } = cases.Ryan;
      expect(favBook).not.to.equal(book)
    })
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should return true if favorite color is not gold', () => {
      const color = 'Gold';
      const { favColor } = cases.Austen;
      expect(favColor).not.to.equal(color);
    })
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should check favorite activity is rock climbing', () => {
      const activity = 'Rock Climbing';
      const { favActivity } = cases.Karthik;
      expect(favActivity).to.equal(activity);
    })
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should add numbers correctly', () => {
        const x = 5;
        const y = 8;
        const addNums = cases.addNums;
        const expectedSum =  x + y;

        const sum = addNums(x, y);
        expect(sum).to.equal(expectedSum);
      })
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
      newCbInvoker(callBack); 
      const called = callBack.called;
      expect(called).to.equal(true);
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
        const n = 4;

        iterator(n, callBack);

        expect(callBack.callCount).to.equal(n);
    });
  });

  
});
