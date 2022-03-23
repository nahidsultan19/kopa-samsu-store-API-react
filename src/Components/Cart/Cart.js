import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    return (
        <div className='cart'>
            <h2 className='order'>Order Summary</h2>
            <p>Selected Items:</p>
            <p>Total Price:</p>
            <p>Total Shipping chanrge:</p>
            <p>Tax:</p>
            <h4>Grand Total:</h4>
        </div>
    );
};

export default Cart;