'use strict';

var React = require('react');

var CreateAccount = React.createClass({
    render: function () {
        return (
            <div className="create-account">
                <label htmlFor="username">
                    <span>Username:</span>
                    <input type="text" id="username" />
                </label>
                <label htmlFor="password">
                    <span>Password:</span>
                    <input type="text" id="password" />
                </label>
                <label htmlFor="confPassword">
                    <span>Confirm Password:</span>
                    <input type="text" id="confPassword" />
                </label>
                <button id="signIn" onClick={this.props.onAuthComplete(null, this.createAccount)}>Create Account</button>
            </div>
        );
    },

    _createAccount: function () {
        return true;
    }
});

module.exports = CreateAccount;
