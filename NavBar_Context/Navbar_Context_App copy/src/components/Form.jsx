import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function Form() {
    const { setName } = useContext(UserContext);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <input type="text" onChange={handleChange} placeholder="Enter your name" />
    );
}

export default Form;
