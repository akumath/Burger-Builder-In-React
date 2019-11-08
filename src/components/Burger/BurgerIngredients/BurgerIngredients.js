import React from 'react';
// import propTypes from 'prop-types';
import classes from './burgerIngredient.module.css';

const BurgerIngredients = (props) => {
    

    let ingredinent = null;

    switch (props.type) {
        case ('bread-bottom'): 
        ingredinent = <div className={classes.BreadBottom}></div>;
        break;

        case('bread-top'):
        ingredinent = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        )
        break;

        case('meat'):
        ingredinent = <div className={classes.Meat}></div>;
        break;

        case('cheese'):
        ingredinent = <div className={classes.Cheese}></div>;
        break;

        case('salad'):
        ingredinent = <div className={classes.Salad}></div>;
        break;

        case('bacon'):
        ingredinent = <div className={classes.Bacon}></div>;
        break;

        default:
            ingredinent = null;
    }

    return ingredinent

    // BurgerIngredients.propTypes = {
    //     type: propTypes.string.isRequired
    // };
}

export default BurgerIngredients;