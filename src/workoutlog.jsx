'use strict';

var React = require('react');
var Navigation = require('./navigation.jsx');
var DefineWorkout = require('./define.jsx');
var StoreWorkout = require('./store.jsx');
var History = require('./history.jsx');

var WorkoutLog = React.createClass({
    getInitialState: function () {
        return {view: 'define'};
    },

    render: function () {
        return (
            <div>
                <h1>Workout Log</h1>
                <Navigation onLogout={this.props.onLogout} onNav={this._onNav} />
                {this.state.view === 'define' ? <DefineWorkout /> : ''}
                {this.state.view === 'store' ? <StoreWorkout /> : ''}
                {this.state.view === 'history' ? <History /> : ''}
            </div>
        );
    },

    _onNav: function (viewName) {
        this.setState({view: viewName});
    }
});

modules.export = WorkoutLog;
