import React from "react";
import styles from "./Layout.module.scss";
import Title from "../Title/Title";


const layout = props => {
    return (
        <main className={styles.Background}>
            <Title/>
            {props.children}
        </main>
    );
};

export default layout;