import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakebd';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';

const Shop = () => {
    const [meals, setMeals] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    // console.log(meals)
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for( const id in storedCart){
            const addedMeal = meals.find(ml=> ml.idMeal === id)
            if(addedMeal){
                const quantity = storedCart[id]
                addedMeal.quantity = quantity
                savedCart.push(addedMeal)
                // console.log('addedMeal',addedMeal)

            }
            // console.log('savedCart',savedCart)
        }
        setCart(savedCart)
    },[meals])

    const selectMeal =(meal)=>{
    // let newCart = [...cart, meal]
    let newCart =[]
        // if product doesn't exist in the cart , set quantity =1 ;
        //if product doesn't exits in the cart, then set quantity = 1;  
        const exists = cart.find(pd => pd.idMeal === meal.idMeal);
        if(!exists){
            meal.quantity = 1;
            newCart = [...cart, meal]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining  = cart.filter(pd => pd.idMeal !== meal.idMeal);
            newCart =[...remaining, exists]
        }
    setCart(newCart);
    addToDb(meal.idMeal)
}

    return (
        <div className='container grid grid-cols-4 '>
            <div className="meals-container grid grid-cols-2 col-span-3 gap-3">
            {
                meals.map(meal => <Meal 
                    meal = {meal}
                    key = {meal.idMeal}
                    selectMeal ={selectMeal}
                    ></Meal>)
            }
            </div>
            <div className="cart-container text-center">
            <Cart cart ={cart} />

            </div>
                
        </div>
    );
};



export  {Shop};