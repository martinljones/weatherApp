import React from "react";
import styles from "./WeekContainer.module.scss";
import Day from "../../components/Day/Day";


const weekContainer = props => {
    const WEEK_LENGTH = 4;
    let trimmedWeeklyArray = trimWeeklyDatesToFive(props.weeklyForcast);
    return (
        <div className={styles.weekContainer}>
        {trimmedWeeklyArray.map((item, index) => {
            let isLastChild;
            isLastChild = WEEK_LENGTH === index ? true : false;
            return <Day key={index} isLastChild={isLastChild} futureDayForcast={item}/>
        })}   
        </div>
    )
}

/**
 * API response gives us more days then we need to render.
 * This helper function trims the array down to the five days necessary.
 * @param {Object[]} weeklyArray 
 */
function trimWeeklyDatesToFive(weeklyArray) {
    return weeklyArray.slice(1,6);
}

export default weekContainer;