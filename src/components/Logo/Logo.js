import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.module.css'

const Logo = (props) => {
    return(
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="Burger" />
        </div>
    )
}

export default Logo;