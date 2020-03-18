import React, {Component} from "react";



class ExercisePlan extends Component {

    constructor(props) {
        super(props); // to bedzie tablica zadan

    }

    render() {
        const {exercises} = this.props;
        return (
            <div className="exercise-plan">
                {exercises.map((exercise, index) => {
               return <li key={index}>{exercise.name} - {exercise.time}m</li>
            })}
            </div>
        )
    }
}

export default ExercisePlan