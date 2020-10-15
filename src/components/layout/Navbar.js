import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignetOutLinks from './SignetOutLinks';



const Navbar = () => {
    return (
        <nav className="nav-wrappery grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">SomePlan</Link>
                <SignedInLinks/>
                <SignetOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar;
