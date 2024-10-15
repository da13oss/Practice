import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function Navbar() {
    const { name } = useContext(UserContext);

    return (
        <nav className="navbar">
            <h1>Hi, {name}!</h1>
        </nav>
    );
}

export default Navbar;
