import React from 'react';
import { useParams } from 'react-router-dom';

const WordDisplay = () => {
    const { word } = useParams();
    return <h1>The word is: {word}</h1>;
};

export default WordDisplay;
