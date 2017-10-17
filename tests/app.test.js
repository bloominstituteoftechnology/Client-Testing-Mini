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
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it. (Fixed it!)
    });
    it('should have length four', () => {
      const apples = cases.apples;
      expect(apples.length).to.equal(4);
    });
    it('contains Red Delicious', () => {
      const apples = cases.apples;
      expect(apples.includes('Red Delicious')).to.equal(true);
    });
    // write a test to check the correct length of the apples array. Done!
    // write a test to check to see if the apples array contains 'Red Delicious'. Done!
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should like Beastie Boys the best', () => {
      const Ben = cases.Ben;
      expect(Ben.favBand).to.equal('Beastie Boys');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'. Done!
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('should love pizza', () => {
      const Sean = cases.Sean;
      expect(Sean.favFood).to.equal('Pizza');
    })
    // write a test to check if Seans's favorite food is 'Pizza'. Done!
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('should love Harry Potter', () => {
      const Ryan = cases.Ryan;
      expect(Ryan.favBook).to.not.equal('Harry Potter');
    })
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'. Done!
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    it('should love gold', () => {
      const Austen = cases.Austen;
      expect(Austen.favColor).to.not.equal('Gold');
    })
    // write a test to see if Austen's favColor is not 'Gold'. Done!
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    it('should love Rock Climbing', () => {
      const Karthik = cases.Karthik;
      expect(Karthik.favActivity).to.equal('Rock Climbing');
    })    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    it('should return three', () => {
      const addNums = cases.addNums;
      expect(addNums(1,2)).to.equal(3);
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('number');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('string');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {

    });
  });

  
});
