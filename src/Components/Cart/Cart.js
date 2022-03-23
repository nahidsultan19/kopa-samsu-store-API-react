import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 10 / 100).toFixed(2);
    const result = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h2 className='order'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping chanrge:$ {shipping}</p>
            <p>Tax:$ {tax}</p>
            <h4>Grand Total:$ {result}</h4>
        </div>
    );
};

export default Cart;