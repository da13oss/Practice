
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planet = ({ id }) => {
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(response => setPlanet(response.data))
            .catch(() => setError("These aren't the droids you're looking for"));
    }, [id]);

    if (error) {
        return <div>{error} <img src="obi-wan.jpg" alt="Obi-Wan Kenobi" /></div>;
    }

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
};

export default Planet;
