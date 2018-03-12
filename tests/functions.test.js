const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const cases = require("../src/functions.js");
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe("functions", () => {
	let testArray = [];
	beforeEach = () => {
		testArray = [1, 2, 3, 4, "eggs", "cheese", "milk"];
	};

	afterEach = () => {
		testArray = [];
	};

	describe("addNums", () => {
		const addNums = cases.addNums;
		it("should be a function", () => {
			// 1
			expect(addNums).to.be.a("function");
		});
		it("should return the sum of two integers", () => {
			// 2
			expect(addNums(1, 2)).to.equal(3);
		});
	});

	describe("callBackInvoker", () => {
		it("should be a function", () => {
			// 3
			const callBackInvoker = cases.callBackInvoker;
			expect(callBackInvoker).to.be.a("function");
		});
		it("should invoke a given callback passed to it", () => {
			// 4
			// this is where you're going to be using 'chai's sinon' spy function.
			const callBack = sinon.spy();
			const newCbInvoker = cases.callBackInvoker;
			newCbInvoker(callBack);
			expect(callBack).to.have.been.called;
			// pass our spy `callBack` to our newCbInvoker fn.
			// write a test that to see if our callback has been called.
			// hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
		});
	});

	describe("iterator", () => {
		it("should be a function", () => {
			// 5
			const iterator = cases.iterator;
			expect(iterator).to.be.a("function");
		});
		//similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
		it("should call a callback for n times passed to cases.iterator", () => {
			// 6
			const callBack = sinon.spy();
			const newIterator = cases.iterator;
			var arrayOfN = [2, 5, 10, 100];
			arrayOfN.forEach(n => {
				callBack.callCount = 0;
				newIterator(n, callBack);
				expect(callBack.callCount).to.equal(n);
			});
		});
	});
});
