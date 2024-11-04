import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCompany = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/company')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>New User and Company</h1>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div>
                    <h2>User</h2>
                    <p>ID: {data.user._id}</p>
                    <p>Name: {data.user.firstName} {data.user.lastName}</p>
                    <p>Email: {data.user.email}</p>
                    <p>Phone: {data.user.phoneNumber}</p>
                    <h2>Company</h2>
                    <p>ID: {data.company._id}</p>
                    <p>Name: {data.company.name}</p>
                    <p>Address: {data.company.address.street}, {data.company.address.city}, {data.company.address.state}, {data.company.address.zipCode}, {data.company.address.country}</p>
                </div>
            ) : (
                <p>Error loading user and company data.</p>
            )}
        </div>
    );
};

export default UserCompany;
