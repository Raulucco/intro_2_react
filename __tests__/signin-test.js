
jest.dontMock('../src/signin.jsx');

var React = require('react');

describe('Signin', function () {
    it('Should contain a sign in button to submit credentials', function () {
        var Signin = require('../src/signin.jsx');
        var TestUtils = require('react-addons-test-utils');

        var onAuthComplete = function () { };
        var signin = TestUtils.renderIntoDocument(
            <Signin onAuthComplete={onAuthComplete} />
            );
        var username = TestUtils.findRenderedDOMComponentWithTag(signin, 'button');

        expect(username.getDOMNode().textContent).toEqual('Sign In');
    });
});