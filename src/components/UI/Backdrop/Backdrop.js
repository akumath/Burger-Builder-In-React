import React from 'react';
import styles from './backdrop.module.css'

const Backdrop = (props) => {
    return(
        <div>
            {props.show} ? <div className={styles.Backdrop}></div> : null
        </div>
    )
}