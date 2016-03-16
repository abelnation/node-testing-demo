
var assert = require('chai').assert;

var MyModule = require('../src/example-01');

describe('MyModule', function() {

	it('doubles a number', function() {
		assert.equal(MyModule.double(2), 4);
	});

	it('doubles lots of numbers', function() {
		for (var i = 0; i < 1000; i++) {
			assert.equal(MyModule.double(i), i * 2);
		}
	})
})