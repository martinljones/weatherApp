import React, {Component} from 'react';
import {UnitsOfMeasureEnum} from '../../utils/applicationConstants';
import styles from "./CurrentWeather.module.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import PropTypes from "prop-types";

class CurrentWeather extends Component {

    shouldComponentUpdate(prevProps) {
        if(this.props.unitsOfMeasure === prevProps.unitsOfMeasure) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Helper function to determine what unit of measure
     * for windspeed to show based on currently active unit of measure.
     * Defaults to mph if no unit of measure is passed. 
     * @param {string} unitOfMeasure
     */
    windspeedUnitOfMeasure = (unitOfMeasure) => {
        switch(unitOfMeasure){
            case UnitsOfMeasureEnum.FARENHEIT:
                return "mph";
            case UnitsOfMeasureEnum.CELSIUS:
                return "mps";
            default:
                return "mph";
        }
    }
  
    render() {
        return (
        <div className={styles.currentWeather}>
            <h1 className={styles.temperature}>{Math.round(this.props.todaysWeather.temperature)}</h1>
            <WeatherIcon icon={this.props.todaysWeather.icon}/>
            <div className={styles.summaryWrapper}>
                <p className={styles.summary}>{this.props.todaysWeather.summary}</p>
                <p className={styles.windSpeed}>{Math.round(this.props.todaysWeather.windSpeed)} {this.windspeedUnitOfMeasure(this.props.unitsOfMeasure)}</p>
            </div>
        </div>
        )
    }
}

CurrentWeather.propTypes = {
    todaysWeather: PropTypes.shape({
        temperature: PropTypes.number,
        icon: PropTypes.string,
        windSpeed: PropTypes.number
    })
}
export default CurrentWeather;