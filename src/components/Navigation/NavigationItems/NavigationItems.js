import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './navigationItems.module.css'

const NavigationItems = () => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems