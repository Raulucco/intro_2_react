'use strict';

var React = require('react');

var DefineWorkout = React.createClass({
    render: function () {
        return (
            <div className="define-workout">
                <h2>Define Workout</h2>
                <label htmlFor="name">
                    <span>Name</span>
                    <input type="text" id="name" />
                </label>
                <label htmlFor="type">
                    <span>Type</span>
                    <input type="text" id="type" />
                </label>
                <label htmlFor="description">Description</label>
                <textarea id="description" ></textarea>
                <button id="save">Save Definition</button>
            </div>
        );
    }
});

module.exports = DefineWorkout;