import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, initialAge, hairColor }) => {
    const [age, setAge] = useState(initialAge);

    const handleBirthday = () => {
        setAge(age + 1);
    };

    return (
        <div className="person-card">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

export default PersonCard;
