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
    it('should have 4 elements', function() {
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    });

    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should include Red Delicious', function() {
      const apples = cases.apples;
      expect(apples).to.include('Red Delicious');
    });
 
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('his favorite band should be "Beastie Boys"', () => {
      const Ben = cases.Ben;
      const favoriteBand = Ben.favBand;
      expect(favoriteBand).to.be.equal('Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('his favorite food should be "Pizza"', () => {
      const Sean = cases.Sean;
      const favoriteFood = Sean.favFood;
      expect(favoriteFood).to.be.equal('Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('his favorite book is not "Harry Potter"', () => {
      const Ryan = cases.Ryan;
      const favoriteBook = Ryan.favBook;
      expect(favoriteBook).to.be.not.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('his favorite color is not "Gold"', () => {
      const Austen = cases.Austen;
      const favoriteColor = Austen.favColor;
      expect(favoriteColor).to.be.not.equal('Gold');
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('his favorite activity should be "Rock Climbing"', () => {
      const Karthik = cases.Karthik;
      const favoriteActivity = Karthik.favActivity;
      expect(favoriteActivity).to.be.equal('Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should return 5 when passed 3 and 2 as arguments', () => {
        const addNums = cases.addNums;
        expect(addNums).to.be.a('function');
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
      newCbInvoker(callBack);
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
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
      iterator(4, callBack);
      expect(callBack).to.have.callCount(4);
    });
  });

  
});
