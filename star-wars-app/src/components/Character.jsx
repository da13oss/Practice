import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Character = ({ id }) => {
    const [character, setCharacter] = useState(null);
    const [homeworld, setHomeworld] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => {
                setCharacter(response.data);
                return axios.get(response.data.homeworld);
            })
            .then(response => setHomeworld(response.data))
            .catch(() => setError("These aren't the droids you're looking for"));
    }, [id]);

    if (error) {
        return <div>{error} <img src="obi-wan.jpg" alt="Obi-Wan Kenobi" /></div>;
    }

    if (!character || !homeworld) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Homeworld: <Link to={`/planets/${homeworld.url.split('/').slice(-2, -1)[0]}`}>homeworld</Link></p>
        </div>
    );
};

export default Character;
