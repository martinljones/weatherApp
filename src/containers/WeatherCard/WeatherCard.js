import React, {Component} from "react";
import styles from "./WeatherCard.module.scss";
import UnitToggle from "../../components/UnitToggle/UnitToggle";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import {UnitsOfMeasureEnum} from '../../utils/applicationConstants'
import axios from "axios";
import WeekContainer from "../WeekContainer/WeekContainer";


class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherResponse:{},
            unitsOfMeasure: UnitsOfMeasureEnum.FARENHEIT
        }
    }

    
    async componentDidMount() {
        let response;
        try {
            response = await this.getCurrentWeatherInDallas(this.state.unitsOfMeasure); 
        }
        catch(error) {
            console.error(error);
        }
        this.setState({weatherResponse: response});
    }


    async componentDidUpdate(prevProps, prevState) {
        if(this.state.unitsOfMeasure === prevState.unitsOfMeasure) {
            return;
        } 
        let response;
        try {
            response = await this.getCurrentWeatherInDallas(this.state.unitsOfMeasure)
        }
        catch(error) {
            console.error(error);
        }
        this.setState({weatherResponse: response});
    }
 
    /**
     * Function is called when the toggle has been clicked,
     * returns new measure that should be activated
     * @param {boolean} currentToggleValue
     * @returns {string}
     */
    setNewUnitOfMeasureFromCurrentToggleValue = (currentToggleValue) => {
        switch(currentToggleValue) {
            case true:
                return UnitsOfMeasureEnum.FARENHEIT;
            case false:
                return UnitsOfMeasureEnum.CELSIUS;
            default:
                return UnitsOfMeasureEnum.FARENHEIT;
        }
    }
    /**
     * @param {Object} event
     * Callback function from the UnitToggle componenet.
     */
    unitsOfMeasureToggle = (event) => {
        let newActiveUnitOfMeasure = this.setNewUnitOfMeasureFromCurrentToggleValue(event.target.checked);
        this.setState({unitsOfMeasure:newActiveUnitOfMeasure});
    }
    /**
     * Handler to get the current temperature in dallas
     * @param {string} currentUnitOfMeasure 
     */
    async getCurrentWeatherInDallas(currentUnitOfMeasure) {
        let response;
         try {
            response = await axios.get(`http://localhost:3001/api/WeatherCtrl/getDallasDailyForcast/${currentUnitOfMeasure}`)
         }
         catch(error) {
             console.error(error);
         }
         return response.data;
    }
  
    render() {
        if(!Object.keys(this.state.weatherResponse).length){
            return null;
        }
        return(
            <div className={styles.whiteFrame}>
                <div className={styles.dallas}>
                    <div className={styles.topOfCardComponentWrapper}>
                    <CurrentWeather todaysWeather={this.state.weatherResponse.currently} unitsOfMeasure={this.state.unitsOfMeasure}/>
                    <UnitToggle toggleUnitOfMeasure={this.unitsOfMeasureToggle}/>
                    </div>
                </div>
                <WeekContainer weeklyForcast={this.state.weatherResponse.daily.data}/>
            </div>
        )
    }
}

export default WeatherCard;