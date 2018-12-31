import React from "react";
import styles from "./Day.module.scss";
import moment from "moment";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const day = props => {
    let wrapperClasses = [styles.dayWrapper];
    if(props.isLastChild) {
        wrapperClasses.push(styles.lastChild);
    }
    return(
        
        <div className={wrapperClasses.join(" ")}>
            <h1 className={styles.futureDay}>{moment.unix(props.futureDayForcast.time).format("ddd")}</h1> 
            <WeatherIcon icon={props.futureDayForcast.icon}/>
            <p className={styles.futureTempHigh}>{Math.round(props.futureDayForcast.temperatureHigh)}</p>

        </div>
    )
}
export default day;