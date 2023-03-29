import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Shop = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    // console.log(meals)
const selectMeal =(meal)=>{
    console.log(meal)
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
            
            <h2>Order Summary</h2>
                <p>Order Item : </p>
            </div>
                
        </div>
    );
};



export  {Shop};