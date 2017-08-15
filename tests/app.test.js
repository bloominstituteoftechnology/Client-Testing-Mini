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
      // expect(apples).to.be.an('object'); // Begin here something is wrong, fix it.
      expect(apples).to.be.an('array');
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of 4', () => {
      const applesLength = cases.apples.length;
      expect(applesLength).to.equal(4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain an element "Red Delicious"', () => {
      const apples = cases.apples;
      expect(apples).to.include('Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      // expect(Ben).to.be.an('array');
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('Favorite band should be the Beastie Boys', () => {
      const bensFavBand = cases.Ben.favBand;
      assert.equal(bensFavBand, 'Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('Favorite food should be the pizza', () => {
      const seanFavFood = cases.Sean.favFood;
      assert.equal(seanFavFood, 'Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('Fav book should NOT be Harry Potter', () => {
      const ryanFavBook = cases.Ryan.favBook;
      expect(ryanFavBook).to.not.equal('Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('Fav color should NOT be Gold', () => {
      const austenFavColor = cases.Austen.favColor;
      expect(austenFavColor).to.not.equal('Gold');
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('Fav activity should be Rock Climbing', () => {
      const austenFavActivity = cases.Karthik.favActivity;
      expect(austenFavActivity).to.equal('Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
    it('should return the sum', () => {
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
      // pass our spy `callBack` to our newCbInvoker fn.
      newCbInvoker(callBack);
      // callBack(newCbInvoker); - NOPE
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
      // mySpy.should.have.been.calledWith("foo");
      // callBack.should.have.been.calledWith("newCbInvoker");
      // expect(mySpy).to.have.been.calledWith("foo");
      // expect(callBack).to.have.been.calledWith(newCbInvoker);
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
      const newIterator = cases.iterator;
      const callBack = sinon.spy();
      newIterator(4, callBack);
      expect(callBack).to.have.callCount(4);
    });
  });


});
