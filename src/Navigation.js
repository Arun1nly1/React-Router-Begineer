import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
function Navigation() {
    const navStyle = {
        color :'white'
    }
    return (
        <nav>
            <h3> Logo here</h3>
            <ul className="nav-links">
                <Link style = {navStyle} to = '/about'>
                    <li>About</li>
                </Link>
                <Link style = {navStyle} to = '/shop'>
                    <li>Shop</li>
                </Link>

              
            </ul>

        </nav>
    );
}

export default Navigation;
