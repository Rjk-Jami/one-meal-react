import React from 'react';

const Meal = (props) => {
    console.log(props)
    const {strMeal,strMealThumb,strCategory} = props.meal
    const selectMeal = props.selectMeal
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className=' h-48 ' src={strMealThumb} alt={strMeal} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>Category:{strCategory}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>selectMeal(props.meal)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;