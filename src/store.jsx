'use strict';

var React = require('react');

var Option = React.createClass({
    render: function () {
        return <option>{this.props.value}</option>;
    }
});

var StoreWorkout = React.createClass({
    _mockWorkouts: [{
        name: "Murph",
        type: "fortime",
        description: "Run 1 Mile \n 100 pull-ups \n 200 push-ups \n 300 squats \n Run 1 Mile"
    },
    {
        name: "Tabata Something Else",
        type: "reps",
        description: "4 x 20 seconds on 10 seconds off for 4 minutes \n pull-ups, push-ups, sit-ups, squats"
    }],

    render: function () {
        var opts = this._mockWorkouts.map(function (workout) {
            return (<Option value={workout.name} />);
        });

        return (
            <div className="tabview">
                <h2>Record Workout</h2>
                <label htmlFor="chooseWorkout">Workout:</label>
                <select name="" id="chooseWorkout">{opts}</select>
                <label htmlFor="workoutResult">Result</label>
                <input type="text" id="workoutResult" />
                <label htmlFor="date">Date</label>
                <input type="date" id="date" />
                <label htmlFor="notes">Notes</label>
                <teatarea id="notes" ></teatarea>
                <button>Store</button>
            </div>
        );
    }
});

module.exports = StoreWorkout;