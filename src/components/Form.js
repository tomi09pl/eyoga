import React, {Component} from 'react';
import ExercisePlan from "./ExercisePlan";
import {loadExercises} from "../exercises"

const palming =
    {
        "id": 29,
        "name": "Palming (eye concealing)",
        "defect": "age-related-condition",
        "defectLvl": "medium",
        "extra": ["Astigmatism" ,"LazyEye" ,"Squint","Convergence"],
        "time": 1
    };


class ExercisePlanner extends Component{

    constructor(props) {
        const exercises = loadExercises();

        super(props);
        this.state = {
            defect:'',
            defectLvl:'low',
            extra:[],
            time: 0,
            plannedExercises: [],
            availableExercises: exercises,
            errorsFound: false
        }
    }


    handleDefectOnChange = (event) => {
        console.log("defect value: " +  event.target.value);
        this.setState({ defect: event.target.value });
    };

    defectLvlOnChange = (event) => {
        console.log("defect level: "+  event.currentTarget.value);
        this.setState({ defectLvl: event.currentTarget.value })
    };

    timeOnChange = (event) => {
        console.log('time:'+event.currentTarget.value);
        this.setState({time: event.currentTarget.value})
    };

    extraOnChange = (event) => {
        console.log(`Checked: ${event.target.checked}; value: ${event.target.value}`);
        let nextExtra = this.state.extra.splice(0);

        if (event.target.checked) {
            nextExtra.push(event.target.value);
        } else {
            nextExtra = nextExtra.filter(x => x !== event.target.value);
        }

        this.setState({extra: nextExtra});
    };

    generatePlan = (e) => {
        e.preventDefault();
        const {defect, defectLvl, availableExercises, extra} = this.state;
        let timeLeft = parseInt(this.state.time);
        this.setState({errorsFound: false});

        //sprawdz defect, time czy sa puste i error jesli tak
let errorMessage = '';
        if (defect === ''){
           errorMessage += "Pusty defect";
        }

        if (timeLeft === 0) {
            errorMessage += defect === '' ? " i time" : "Pusty time";
        }

        if (errorMessage){
            window.alert(errorMessage);
            this.setState({errorsFound: true});
            return;
        }

        let exercisesByType = availableExercises
            .filter(x => x.defect === defect)
            .filter(x => x.defectLvl === defectLvl);

        if (extra.length > 0){
            exercisesByType = exercisesByType.filter(x => x.extra.some(y=> extra.includes(y)));
        }

        const planned = [];
        let counter = 0;
        while (timeLeft > 0){
            exercisesByType.forEach((e, index) => {
               if (e.time <= timeLeft || counter == 100) {
                   let exerciseTime = e.time;

                   if (counter == 100) {
                       exerciseTime = timeLeft;
                   }

                   planned.push({
                       name: e.name,
                       time: exerciseTime
                   });
                   timeLeft = timeLeft - e.time;

                   if (timeLeft > 0){
                       palming.id = `${palming.id}-${index}`;
                       planned.push({
                           name: palming.name,
                           time: palming.time
                       });
                       timeLeft = timeLeft - palming.time;
                   }
               }
            });

            counter++;
        }

        this.setState({plannedExercises: planned});
        // tutaj based on the state wyfiltruj liste taskow (wczytanych z exercises.js) i update'tuj state
    };

    render() {
        return(

            <div className="formDiv">
                <div className="bar" id='form-top'></div>
                <h1 className="form-title">Exercise Planner</h1>
                <h2 className="form-subtitle">Create your own exercise set</h2>
                <div className="divider"></div>
                {this.state.errorsFound && <div>Prosze wypelnij wymagane pola</div>}
                <p className='form-p'>This planner will help you to create personalised exercise list crafted for your needs and available time.</p>
                <form onSubmit={this.generatePlan}>
                    <div className="defect-select">
                        <span className="selectTitle">Primary vision defect:</span>
                        <select name="defect" id="defect" value={this.state.defect} onChange={this.handleDefectOnChange}
                         classname={`base-class ${this.state.errorsFound && this.state.defect === '' ? "error-class":""}`}>
                            <option value="">Please select vision defect</option>
                            <option value="Short-sightedness">Short sightedness</option>
                            <option value="Long-sightedness">Long sightedness</option>
                            <option value="age-related-condition">Age related condition</option>
                            <option value="no-defect">No defect</option>
                        </select>

                        {this.state.defect!==''?
                            <div className="defect-radio">
                                <label>
                                    <input type="radio" value="low" checked={this.state.defectLvl === "low"}
                                           onChange={this.defectLvlOnChange}/>
                                    {'low (<1 diopters)'}
                                </label><br/>
                                <label>
                                    <input type="radio" value="medium" checked={this.state.defectLvl === "medium"}
                                           onChange={this.defectLvlOnChange}/>
                                    {'medium (1-4 diopters) '}
                                </label><br/>
                                <label>
                                    <input type="radio" value="high" checked={this.state.defectLvl === "high"}
                                           onChange={this.defectLvlOnChange}/>
                                    {'high (>4 diopters) '}
                                </label><br/>
                            </div>
                            :null
                        }

                        <input className='form-submit-btn' type="submit" value="SUBMIT" />

                    </div>



                    <div className="defect-checkbox">
                        <label>
                        <input type="checkbox" value="Astigmatism" checked={this.state.extra.includes("Astigmatism")} onChange={this.extraOnChange}/>
                        Astigmatism
                        </label><br/>
                        <label>
                            <input type="checkbox" value="LazyEye" checked={this.state.extra.includes("LazyEye")} onChange={this.extraOnChange}/>
                            Lazy Eye
                        </label><br/>
                        <label>
                            <input type="checkbox" value="Squint" checked={this.state.extra.includes("Squint")} onChange={this.extraOnChange}/>
                            Squint
                        </label><br/>
                        <label>
                            <input type="checkbox" value="Convergence" checked={this.state.extra.includes("Convergence")} onChange={this.extraOnChange}/>
                            Convergence issue
                        </label><br/>
                    </div>

                    <div className="defect-time-select">
                        <span className="selectTitle">Exercise daily time:</span>
                        <select name="time" id="time" value={this.state.time} onChange={this.timeOnChange}>
                            <option value={0}> Please select available time</option>
                            <option value={5}> 5 minutes</option>
                            <option value={10}> 10 minutes</option>
                            <option value={15}> 15 minutes</option>
                            <option value={20}> 20 minutes</option>
                            <option value={25}> 25 minutes</option>
                            <option value={30}> 30 minutes</option>
                        </select>
                    </div>

                </form>

                {this.state.plannedExercises.length !== 0 &&
                    <ExercisePlan exercises={this.state.plannedExercises} />}
            </div>
        )
    }

};

export default ExercisePlanner;
