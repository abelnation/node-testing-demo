
var assert = require('chai').assert;
var mockery = require('mockery')

var MyModule = require('../src/example-mockery');

describe('MyModule', function() {

	before(function() {
		mockery.enable();
	})

	after(function() {
		mockery.disable();
	})

	describe('Mock NOT provided', function() {
		it('throws if dependency not mocked (because does not exist!)', function() {
			assert.throws(function() {
				MyModule.double(5)
			})
		})
	})

	describe('Mock provided', function() {
		before(function() {
			mockery.registerMock('my-dep', {
				double: function(x) { return x * 2 }
			})
		})

		it('doubles a number', function() {
			assert.equal(MyModule.double(2), 4);
		});

		it('doubles lots of numbers', function() {
			for (var i = 0; i < 1000; i++) {
				assert.equal(MyModule.double(i), i * 2);
			}
		})
	})
})