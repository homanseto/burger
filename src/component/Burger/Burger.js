import React from "react";
import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) =>{
    const {ingredients } = props
    let transformedIngredients = Object.keys(ingredients)
    .map(igKey =>{
        return [...Array(ingredients[igKey])].map((_,i) =>{
            return <BurgerIngredient key={igKey +i} type={igKey} />
        })
    })
    .reduce((arr, el ) =>{
        return arr.concat(el)
    }, []);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients in your burger</p>
    }

    console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger

const lists ={
    a:1,
    b:2,
    c:3,
}

const ar = Object.keys(lists)
const print = [...Array(lists["b"])]
console.log(print)
console.log(ar)
console.log(lists["a"])