import React from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/Character';
import Navigation from '../components/Navigation';

const CharacterPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navigation />
            <Character id={id} />
        </div>
    );
};

export default CharacterPage;
