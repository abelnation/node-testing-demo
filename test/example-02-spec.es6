
const assert = require('chai').assert;

const MyModule = require('../src/example-02');

describe('MyModule', () => { // <== don't use fat arrow syntax anymore for tests

	it('doubles a number', () => {
		assert.equal(MyModule.double(2), 4);
	});

	it('doubles lots of numbers', () => {
		for (var i = 0; i < 1000; i++) {
			assert.equal(MyModule.double(i), i * 2);
		}
	})
})