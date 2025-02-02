import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component  {
    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
            return (
                <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            )
        })

        return (
            <div>
                <h3>Order Summary</h3>
                <p>A delicious burger with the following igredients</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </div>
        ) 
    }  
}

export default OrderSummary;