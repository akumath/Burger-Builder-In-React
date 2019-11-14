import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount = () => {
        axios.get('https://burger-builder-in-react-57d8d.firebaseio.com/ingredients.json')
            .then(response => {
                console.group(response.data)
                this.setState({ingredients: response.data})
            })
            .catch(error => console.log(error))
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients,  totalPrice: newPrice})
        this.updatePurchasesState(updatedIngredients)

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ ingredients: updatedIngredients,  totalPrice: newPrice})
        this.updatePurchasesState(updatedIngredients)
    }

    updatePurchasesState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({purchaseable: sum>0})
    }

    updatePurchasing = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Arpan',
                Address: 'Test Street',
                City: 'Test city',
                zipCode: '60611'
            },
            email: 'test@test.com',
            deliveryMethod: 'Fastest'
        }
        axios.post('https://burger-builder-in-react-57d8d.firebaseio.com/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false, purchasing:false})
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false, purchasing:false})
            })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = null;

        let burger = <Spinner />

        if (this.state.ingredients) {
            burger = (
                <div>
                    <div><Burger ingredients={this.state.ingredients}/></div> 
                    <div><BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo} 
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        order={this.updatePurchasing}/>
                    </div>
                </div>
            )

            orderSummary =  <OrderSummary 
                ingredients={this.state.ingredients} 
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                totalPrice={this.state.totalPrice}
            />
            if(this.state.loading) {
                orderSummary = <Spinner />
            }   
        }

        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </div>
        )
    }
}

export default BurgerBuilder;