import React, {Component} from "react";


class ExercisePlan extends Component {

    constructor(props) {
        super(props); // to bedzie tablica zadan
    }

    render() {
        const {exercises} = this.props;
        return (
            <div className="exercise-plan">
                <h4>YOUR EXERCISES:</h4>
                <ul>
                {exercises.map((exercise, index) => {
                    return <li key={index}><span className='ex-left'>{exercise.name}</span> <span className="ex-right">Time: {exercise.time} min.</span></li>
            })}
                </ul>

            </div>
        )
    }
}

export default ExercisePlan