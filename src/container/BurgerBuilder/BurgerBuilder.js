import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary"
import Burger from "../../component/Burger/Burger"
import BuildControls from "../../component/Burger/BuildControls/BuildControls"
import Modal from "../../component/UI/Modal/Modal"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purachaseable: false 
    }

addIngredientHandler =(type)=>{
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount +1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const priceAdditon = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({
        totalPrice: priceAdditon,
        ingredients: updatedIngredients
    })

    this.checkOrderHandler(updatedIngredients);
}

removeIngredientHandler =(type)=>{
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0 ){
        return;
    }
    const updatedCount = oldCount -1;
    
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const finalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
   
    this.setState({
        totalPrice: finalPrice,
        ingredients: updatedIngredients
    })  

    this.checkOrderHandler(updatedIngredients);
}

checkOrderHandler(ingredients) {
    const ar = Object.values(ingredients).reduce((acc, cur)=>{
        return acc+cur
    })
    this.setState({purachaseable: ar >0 ? true : false})

}
    
    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <Aux>
            <Modal />
                <Burger ingredients ={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded ={this.addIngredientHandler}
                    ingredientSubtracted = {this.removeIngredientHandler}
                    disabled = {disableInfo}
                    prices= {this.state.totalPrice}
                    order ={this.state.purachaseable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;


const lists ={
    a:1,
    b:2,
    c:3
}

const ar = Object.values(lists)
console.log(ar)

let sum = ar.reduce((acc, cur) =>{
    return acc + cur
},0)

console.log(sum)