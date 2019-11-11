import React from 'react';

import styles from './button.module.css';

const Button = (props) => {
    return(
        <div>
            <button className={[styles.Button, styles[props.btnType]].join('')}
            onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default Button;