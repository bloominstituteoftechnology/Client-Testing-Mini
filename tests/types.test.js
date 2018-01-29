const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); 
    });
    // write a test to check the correct length of the apples array.
  describe('apples', () => {
    it('should be length four', () => {
      const apples = cases.apples;
      expect(apples.length).to.equal(4);
    }
    // write a test to check to see if the apples array contains 'Red Delicious'.
  describe('apples', () => {
    it('should contain Red Delicious', () => {
      const apples = cases.apples; 
      expect(apples).to.include('RedDelicious', true);
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });
  describe('Ben', () => {
    it('fav band is', () => {
      const Ben = cases.Ben; 
      expect(Ben.favBand).to.equal('Beastie Boys');
    });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('number');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  describe('Sean', () => {
      it('favorite food should be Pizza', () => {
        const Sean = cases.Sean;
        expect(Sean).to.be.equal.toString('favorite food should be Pizza');
      });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('function');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Ryan', () => {
    it('should be Ryans favBook is not Harry Potter', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('Ryans favBook is not Harry Potter');
    });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('function');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });
  describe('Austen', () => {
    it('favColor is not Gold', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('favColor is not Gold');
    });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('function');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
  describe('Ivan', () => {
    it('favActivity is Rock Climbing', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('favActivity is Rock Climbing');
    });
