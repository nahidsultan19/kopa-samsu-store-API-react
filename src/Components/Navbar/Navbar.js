import React from 'react';
import './Navbar.css';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Kopa Samsu Store</h1>
            <div className="cart-counter">
                <span></span>
                <BsFillCartFill className='icon' color='#fff'></BsFillCartFill>
            </div>
        </div>
    );
};

export default Navbar;