import React from 'react';
import { useParams } from 'react-router-dom';

const NumberDisplay = () => {
    const { param } = useParams();
    const isNumber = !isNaN(param);

    return (
        <h1>
            {isNumber ? `The number is: ${param}` : `The word is: ${param}`}
        </h1>
    );
};

export default NumberDisplay;
