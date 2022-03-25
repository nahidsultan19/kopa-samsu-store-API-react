import React from 'react';
import './Product.css';
import { BsFillCartFill } from 'react-icons/bs';

const Product = (props) => {
    const { img, name, bullet, capacity, action } = props.product
    const { addToCart } = props;
    return (
        <div className='card'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="gun-info">
                <h3>{name}</h3>
                <p>Bullet: {bullet}</p>
                <small>Capacity: {capacity}</small>
                <p>Action: {action}</p>
            </div>
            <div onClick={() => addToCart(props.product)} className="cart-btn">
                <p className='btn-text'>Add to Cart</p>
                <BsFillCartFill></BsFillCartFill>
            </div>
        </div>
    );
};

export default Product;