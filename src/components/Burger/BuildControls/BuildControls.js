import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './buildControls.module.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
    console.log(props)
    return(
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {
                controls.map(control => (
                    <BuildControl 
                        key={control.label} 
                        label={control.label} 
                        ingredientAdded={() => props.ingredientAdded(control.type)}
                        ingredientRemoved={() => props.ingredientRemoved(control.type)}
                        disabled={props.disabled[control.type]}/>
                ))
            }
            <button className={styles.OrderButton} disabled={!props.purchaseable} onClick={props.order}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;