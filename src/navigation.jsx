'use strict';

var React = require('react');

var Navigation = React.createClass({
    render: fucntion () {
        return (
            <ul className="navigation">
                <li className="nav-item"><a href="#" onClick={this.props.onNav.bind(null, this._nav("define"))}>Define a Workout </a></li>
                <li className="nav-item"><a href="#" onClick={this.props.onNav.bind(null, this._nav("store"))}>Record a Workout </a></li>
                <li className="nav-item"><a href="#" onClick={this.props.onNav.bind(null, this._nav("history"))}>View Workouts History </a></li>
                <li className="nav-item"><a href="#" onClick={this.props.onNav.bind(null, this.onLogout}>Logout </a></li>
            </ul>
        );
    }

    _nav: function (view) {
        return view;
    }
});

module.exports = Navigation;
