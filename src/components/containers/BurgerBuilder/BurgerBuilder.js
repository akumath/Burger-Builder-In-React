import React, { Component } from 'react';
import Burger from '../../Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <div>
                <div><Burger ingredients={this.state.ingredients}/></div> 
                <div>Build Controls</div>
            </div>
        )
    }
}

export default BurgerBuilder;