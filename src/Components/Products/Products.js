import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    // console.log(products)
    const [cart, setCart] = useState([])

    const addToCart = (gun) => {
        console.log(gun)
        const newCart = [...cart, gun];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='products'>
            <div className='guns'>
                {products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)}
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                {cart.map(item => <Cart key={item.id} item={item}></Cart>)}
            </div>
        </div>
    );
};

export default Products;