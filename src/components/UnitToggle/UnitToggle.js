import React from "react";
import styles from "./UnitToggle.module.scss";
import Aux from "../../hoc/Aux";

const unitToggle = props => {
    return (
    <Aux>
        <input type="checkbox" id="unitToggle" 
            defaultChecked={true} 
            onChange={props.toggleUnitOfMeasure}/>
        <label className={styles.temperatureToggle} htmlFor="unitToggle"></label>
    </Aux>
        );
    }

export default unitToggle;
