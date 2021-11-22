import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Climbing stuff</h1>
            <ul>
                <Link style={{ margin: '0px 10px' }} to="/">
                    Home
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/shoes">
                    Shoes
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/ropes">
                    Rope
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/expres">
                    Expres
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/harness">
                    Harness
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/contador">
                    Contador
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
