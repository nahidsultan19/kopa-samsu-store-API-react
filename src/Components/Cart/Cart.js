import React from 'react';

const Cart = (props) => {
    const { item } = props;
    return (
        <div>
            <p>Name: {item.name}</p>
        </div>
    );
};

export default Cart;