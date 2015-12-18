'use strict';

var React = require('react');

var Signin = React.createClass({
    render: function () {
        return (
            <div>
                <label htmlFor="username">
                    <span>Username</span>
                    <input type="text" id="username" />
                </label>
                <label htmlFor="password">
                    <span>Password</span>
                    <input type="text" id="password" />
                </label>
                <button id="signIn" onClick={this.props.onAuthComplete.bind(null, this._doAuth)}>Sign In</button>
            </div>
        );
    }

    _doAuth: function () {
        return true;
    }
});

module.exports = SignIn;