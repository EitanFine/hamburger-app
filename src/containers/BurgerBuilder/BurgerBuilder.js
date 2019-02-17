import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredient = (type) => {
    let oldCount = this.state.ingredients[type]
    let newCount = oldCount + 1
    let newIngredients = {
      ...this.state.ingredients
    }
    newIngredients[type] = newCount
    let priceAddition = INGREDIENT_PRICES[type]
    let newPrice = this.state.totalPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: newIngredients})
  }

  removeIngredient = (type) => {
    let oldCount = this.state.ingredients[type]
    if (oldCount <= 0) return
    let newCount = oldCount - 1
    let newIngredients = {
      ...this.state.ingredients
    }
    newIngredients[type] = newCount
    let priceDeduction = INGREDIENT_PRICES[type]
    let newPrice = this.state.totalPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: newIngredients})
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={ this.state.ingredients }/>
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder