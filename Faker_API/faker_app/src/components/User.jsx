import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/new')
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>New User</h1>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <div>
                    <p>ID: {user._id}</p>
                    <p>Name: {user.firstName} {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phoneNumber}</p>
                </div>
            ) : (
                <p>Error loading user data.</p>
            )}
        </div>
    );
};

export default User;
