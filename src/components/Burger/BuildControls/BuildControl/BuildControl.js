import React from 'react';
import styles from './buildControl.module.css'
const BuildControl = (props) => {
    return(

        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.BuildControl.Less} onClick={props.ingredientRemoved} disabled={props.disabled}>LESS</button>
            <button className={styles.BuildControl.More} onClick={props.ingredientAdded}>MORE</button>
        </div>

    )
}

export default BuildControl;