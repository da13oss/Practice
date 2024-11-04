import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/books?search=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Failed to search books', error);
        }
    };

    return (
        <div>
            <h2>Search Books</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title or author" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map(book => (
                    <li key={book._id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Pages: {book.pages}</p>
                        <p>Available: {book.isAvailable ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBooks;
