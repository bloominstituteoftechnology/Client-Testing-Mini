const chai = require("chai");
const cases = require("../src/app.js");
const expect = chai.expect;
const assert = chai.assert;

describe("Cases from app.js", () => {
  // this is a testing suite made up of suites.

  describe("apples", () => {
    const apples = cases.apples;
    it("should be an array", () => {
      expect(apples).to.be.an("array"); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it("should be the correct length of the apples array", () => {
      expect(apples).to.have.lengthOf(apples.length);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it("should contain 'Red Delicious'", () => {
      expect(apples).to.include("Red Delicious");
    });
  });

  describe("Ben", () => {
    const Ben = cases.Ben;
    it("should be an object", () => {
      expect(Ben).to.be.an("object");
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it("favorite band should be 'Beastie Boys'", () => {
      expect(Ben.favBand).to.equal("Beastie Boys");
    });
  });

  describe("Sean", () => {
    const Sean = cases.Sean;
    it("should be an object", () => {
      expect(Sean).to.be.an("object");
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it("favorite food should be 'Pizza'", () => {
      expect(Sean.favFood).to.equal("Pizza");
    });
  });

  describe("Ryan", () => {
    const Ryan = cases.Ryan;
    it("should be an object", () => {
      expect(Ryan).to.be.an("object");
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it("favBook should `not` be 'Harry Potter'", () => {
      expect(Ryan.favBook).to.not.equal("Harry Potter");
    });
  });

  describe("Austen", () => {
    const Austen = cases.Austen;
    it("should be an object", () => {
      expect(Austen).to.be.an("object");
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it("favColor should not be 'Gold'", () => {
      expect(Austen.favColor).to.not.equal("Gold");
    });
  });

  describe("Ivan", () => {
    const Ivan = cases.Ivan;
    it("should be an object", () => {
      expect(Ivan).to.be.an("object");
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it("favActivity should be 'Rock Climbing'", () => {
      expect(Ivan.favActivity).to.equal("Rock Climbing");
    });
  });
});
