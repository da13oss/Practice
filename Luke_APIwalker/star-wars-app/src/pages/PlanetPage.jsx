import React from 'react';
import { useParams } from 'react-router-dom';
import Planet from '../components/Planet';
import Navigation from '../components/Navigation';

const PlanetPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navigation />
            <Planet id={id} />
        </div>
    );
};

export default PlanetPage;
