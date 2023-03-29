import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    console.log(meals)
    return (
        <div>

        </div>
    );
};



export  {Shop};