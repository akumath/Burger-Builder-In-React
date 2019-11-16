import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './burger.module.css';

const Burger = (props) => {
    console.log(props.ingredients)
    // transform a object of key,value pairs into an array of ingredients
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            { transformedIngredients }
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger; 