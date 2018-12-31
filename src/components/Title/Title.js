import React from 'react';
import styles from "./Title.module.scss";
import moment from "moment";

const title = props => {
    const TODAY = new moment().format("dddd, LL");
    return (
        <div className={styles.titleContainer}>
            <p className={styles.location}>Dallas, TX</p>
            <p className={styles.date}>{TODAY}</p>
        </div>
    )
}

export default title;