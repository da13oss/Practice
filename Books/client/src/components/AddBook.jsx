import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', { title, author, pages, isAvailable });
        try {
            const response = await axios.post('http://localhost:8000/api/books', {
                title,
                author,
                pages,
                isAvailable
            });
            console.log('Response:', response.data);
            setMessage('Book added successfully!');
            // Clear form fields
            setTitle('');
            setAuthor('');
            setPages('');
            setIsAvailable(false);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to add book. ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label>Pages:</label>
                    <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} required />
                </div>
                <div>
                    <label>Available:</label>
                    <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
                </div>
                <button type="submit">Add Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddBook;
