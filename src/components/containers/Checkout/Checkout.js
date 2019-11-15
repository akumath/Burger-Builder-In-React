import React, { Component } from 'react';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon:1,
            meat:1
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replce('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled = {this.checkoutCancelledHandler}
                    checkoutContinued = {this.heckoutContinuedHandler}/>
            </div>
        )
    }
}

export default Checkout;