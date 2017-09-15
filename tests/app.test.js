const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const cases = require('../src/app.js')
const expect = chai.expect
const assert = chai.assert
chai.use(sinonChai)

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
  const {apples, Ben, Sean, Ryan, Austen, Karthik, addNums, callBackInvoker, iterator} = cases
  describe('apples', () => {
    it('should be an array', () => {
      expect(apples).to.be.an('array') // DONE Begin here something is wrong, fix it.
    })
    // DONE write a test to check the correct length of the apples array.
    it('should have a length of 4', () => { 
      const length = apples.length
      expect(length).to.equal(4)
    })
    // DONE write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain "Red Delicious"', () => {
      const redDeliciousIndex = apples.indexOf('Red Delicious')
      expect(redDeliciousIndex).to.not.equal(-1)
    })
  })

  describe('Ben', () => {
    it('should be an object', () => {
      expect(Ben).to.be.an('object')
    })
    // DONE write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have a favBand property equaling "Beastie Boys"', () => {
      expect(Ben.favBand).to.equal('Beastie Boys')
    })
  })

  describe('Sean', () => {
    it('should be an object', () => {
      expect(Sean).to.be.an('object')
    })
    // DONE write a test to check if Seans's favorite food is 'Pizza'.
    it('should have a favFood property equaling "Pizza"', () => {
      expect(Sean.favFood).to.equal('Pizza')
    })
  })

  describe('Ryan', () => {
    it('should be an object', () => {
      expect(Ryan).to.be.an('object')
    })
    // DONE write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should have a favBook property not equaling "Harry Potter"', () => {
      expect(Ryan.favBook).to.not.equal('Harry Potter')
    })
  })

  describe('Austen', () => {
    it('should be an object', () => {
      expect(Austen).to.be.an('object')
    })
    // DONE write a test to see if Austen's favColor is not 'Gold'.
    it('should have a favColor property not equaling "Gold"', () => {
      expect(Austen.favColor).to.not.equal('Gold')
    })
  })

  describe('Karthik', () => {
    it('should be an object', () => {
      expect(Karthik).to.be.an('object')
    })
    // DONE write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should have a favActivity property equaling "Rock Climbing"', () => {
      expect(Karthik.favActivity).to.equal('Rock Climbing')
    })
  })

  describe('addNums', () => {
    it('should be a function', () => {
      expect(addNums).to.be.a('function')
    })
    // DONE write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2) the return value should be 3.
    it('should correctly add numbers, i.e. if is called addNums(1, 2) the return value should be 3.', () => {
      const returnValue = addNums(1, 2)
      expect(returnValue).to.equal(3)
    })
  })

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      expect(callBackInvoker).to.be.a('function')
    })
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy()
      const newCbInvoker = callBackInvoker
      // pass our spy `callBack` to our newCbInvoker fn. 
      newCbInvoker(callBack)
      // DONE write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
      expect(callBack).to.have.been.called
    })
  })

  describe('iterator', () => {
    it('should be a function', () => {
      expect(iterator).to.be.a('function')
    })
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy()
      const newIterator = iterator
      newIterator(10, callBack)
      expect(callBack).to.have.callCount(10)
    })
  })

  
})
