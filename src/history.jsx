'use strict';

var React = require('react');

var List = React.createClass({
    render: function () {
        return <li>{this.props.name} - {this.props.result}</li>
    }
});

var History = React.createClass({
    _mockHistory: [{
            name: "Murph",
            result: "32:18",
            notes: "painful, but fun"
        },
        {
            name: "Tabata Something Else",
            type: "reps",
            result: "421",
            notes: ""
        }],

    render: function () {

        var li = this._mockHistory.map(function (workout) {
            return <List {...workout} />
        });

        return (
            <div className="history">
                <h2>History</h2>
                <ul>{li}</ul>
            </div>
        );
    }
});

module.exports = History;
