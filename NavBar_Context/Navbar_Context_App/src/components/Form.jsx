import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function Form() {
    const { setName } = useContext(UserContext);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="form-container">
            <label htmlFor="name-input">Your Name:</label>
            <input id="name-input" type="text" onChange={handleChange} placeholder="Enter your name" />
        </div>
    );
}

export default Form;
