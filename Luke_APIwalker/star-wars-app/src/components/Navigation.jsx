import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Link to="/">Home</Link>
    </nav>
);

export default Navigation;
