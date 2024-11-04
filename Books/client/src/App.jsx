import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Book Collection</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <nav>
        <ul>
          <li><Link to="/add">Add Book</Link></li>
          <li><Link to="/list">View Books</Link></li>
          <li><Link to="/search">Search Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
};

export default App;
