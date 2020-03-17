import React, {Component} from 'react';
import ExercisePlan from "./ExercisePlan";
// zaimportuj tablie z exercises.js

class ExercisePlanner extends Component{

    constructor(props) {
        super(props);
        this.state = {
            defect:'',
            defectLvl:'low',
            extra:[],
            time: '',
            plannedExercises: [],
            availableExercises: [] // to zmien na table z importu
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

    generatePlan = () => {
        const planned = this.state.availableExercises
            .filter(x => x.defect === this.state.defect)
            .filter(x => x.defectLvl === this.state.defectLvl)
            .filter(x => x.extra.includes(this.state.extra)) // sprtawdzic jak sie sprawdza czy tabla zawiera druga tablice tzw. innerjoin;
            // tutaj dodac jakis algorytm na czas

        // w ramach testu planned = importowana tabla

        this.setState({plannedExercises: planned});
        // tutaj based on the state wyfilteruj liste taskow (wczytanych z innego pliku) i zupdatuje state
    };

    render() {
        return(

            <div className="formDiv">
                <div className="bar"></div>
                <form>
                    <div className="defect-select">
                        <span className="selectTitle">Primary vision defect:</span>
                        <select name="defect" id="defect" value={this.state.defect} onChange={this.handleDefectOnChange}>
                            <option value="">Please select vision defect</option>
                            <option value="Short-sightedness">Short sightedness</option>
                            <option value="Long-sightedness">Long sightedness</option>
                            <option value="age-related-condition">Age related condition</option>
                            <option value="no-defect">No defect</option>
                        </select>
                    </div>

                    <div className="defect-radio">
                        <label>
                            <input type="radio" value="low" checked={this.state.defectLvl === "low"} onChange={this.defectLvlOnChange} />
                            {'low (<1 diopters)'}
                        </label><br/>
                        <label>
                            <input type="radio" value="medium" checked={this.state.defectLvl === "medium"} onChange={this.defectLvlOnChange} />
                            {'medium (1-4 diopters) '}
                        </label><br/>
                        <label>
                            <input type="radio" value="high" checked={this.state.defectLvl === "high"} onChange={this.defectLvlOnChange} />
                            {'high (>4 diopters) '}
                        </label><br/>
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

                    <button className="formSubmit" onSubmit={this.generatePlan}>SUBMIT!</button>

                </form>

                {this.state.plannedExercises.length !== 0 &&
                    <ExercisePlan exercises={this.state.plannedExercises} />}
            </div>
        )
    }


};

export default ExercisePlanner;
