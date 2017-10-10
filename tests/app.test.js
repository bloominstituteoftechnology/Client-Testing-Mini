const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);  // how to add plug-ins to Chai

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
  const apples = cases.apples; //global, can also use it locally for each test
  describe('apples', () => {
    it('should be an array', () => {
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should have an element length of 4', () => {
      expect(apples).to.have.lengthOf(4);
    });
    it('should have an element named "Red Delicious" ', () => {
      expect(apples).to.include('Red Delicious');
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben; //variable defined locally
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have a value of "Beastie Boys" for favorite band', () => {
      const Ben = cases.Ben;
      expect(Ben.favBand).to.equal('Beastie Boys') //needs local variable;
      //expect({favBand: 'Beastie Boys'}).to.include({favBand: 'Beastie Boys'}); **Another way to do, does not need local variable
    });
  });
  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should have a value of "Pizza" for favorite food', () => {
      expect({favFood: 'Pizza'}).to.include({favFood: 'Pizza'});
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have a value of anything except "Harry Potter" for favorite book', () => {
       expect({favBook: 'The Giver'}).to.include({favBook: 'The Giver'});  //best way if you know the expected output
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should have a value of anything except "Gold" for favorite color', () => {
      expect({favColor: 'Yellow'}).to.not.equal({favColor: 'Yellow'});
      //expect({favColor: 'Yellow'}).to.include({favColor: 'Yellow'}); //best way to do this if you know the expected output
    }); 
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should have a value of "Rock Climbing" for favorite activity', () => {
      expect({favActivity: 'Rock Climbing'}).to.include({favActivity: 'Rock Climbing'});
    });
  });

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should output 3 if 1 and 2 are inputs', () => {
        expect(addNums(1, 2)).to.equal(3);
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
    const iterator = cases.iterator;
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      iterator(7, callBack);
      expect(callBack).to.have.callCount(7);
    });
  });

  
});