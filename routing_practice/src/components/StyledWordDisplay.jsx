import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordDisplay = () => {
    const { word, color, backgroundColor } = useParams();
    return (
        <h1 style={{ color: color, backgroundColor: backgroundColor }}>
            The word is: {word}
        </h1>
    );
};

export default StyledWordDisplay;
