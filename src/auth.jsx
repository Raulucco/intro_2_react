'use strict';

var React = require('react');
var SignIn = require('./signin.jsx');
var CreateAccount = require('./create-account.jsx');

var Authentication = React.createClass({
    render: function () {
        return (
            <div className="authentication">
                <SignIn onAuthComplete={this.props.onAuthComplete} />
                <CreateAccount onAuthComplete={this.props.onAuthComplete} />
            </div>
        );
    }
});

module.exports = Authentication;
