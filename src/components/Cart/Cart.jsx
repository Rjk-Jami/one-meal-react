import React from 'react';

const Cart = ({cart}) => {
    // console.log('cart',cart)
let quantity = 0
    for(const meal of cart){
        // console.log('meal',meal.quantity)
        quantity =quantity + meal.quantity
    }
    console.log(cart)
    return (
        <div>
          <h2>Order Summary</h2>
                <p>Order Item :{quantity} </p>  
        </div>
    );
};

export default Cart;