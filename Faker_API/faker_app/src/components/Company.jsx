import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Company = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/companies/new')
            .then(response => {
                setCompany(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>New Company</h1>
            {loading ? (
                <p>Loading...</p>
            ) : company ? (
                <div>
                    <p>ID: {company._id}</p>
                    <p>Name: {company.name}</p>
                    <p>Address: {company.address.street}, {company.address.city}, {company.address.state}, {company.address.zipCode}, {company.address.country}</p>
                </div>
            ) : (
                <p>Error loading company data.</p>
            )}
        </div>
    );
};

export default Company;
