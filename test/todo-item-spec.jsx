
var assert = require('chai').assert
var React = require('react')
var ReactTestUtils = require('react-addons-test-utils')

var jsdom = require('jsdom')

var TodoItem = require('../src/todo-item')

// see: https://github.com/jesstelford/react-testing-mocha-jsdom
describe('todo-item', function() {
	beforeEach(function() {

		// reset jsdom document

		// A super simple DOM ready for React to render into
		// Store this DOM and the window in global scope ready for React to access
		global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
		global.window = document.parentWindow
	})

	for (var isDone of [ true, false ]) {
		describe('done==' + isDone, function() {
			beforeEach(function() {
				// render test elem
				var renderedComponent = ReactTestUtils.renderIntoDocument(
			      <TodoItem done={ isDone } name="Write Tutorial"/>
			    )

				// Searching for <input> tag within rendered React component
			    // Throws an exception if not found
			    this.inputComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
			      renderedComponent,
			      'input'
			    )
			})

			it('input should be a checkbox', function() {
				assert.equal(this.inputComponent.type, 'checkbox')
			})

			it('input is checked', function() {
				assert.equal(this.inputComponent.checked, isDone)
			})
		})
	}

})