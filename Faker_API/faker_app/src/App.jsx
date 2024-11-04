import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import Company from './components/Company';
import UserCompany from './components/UserCompany';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users/new">New User</Link></li>
          <li><Link to="/companies/new">New Company</Link></li>
          <li><Link to="/user/company">New User and Company</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/new" element={<User />} />
        <Route path="/companies/new" element={<Company />} />
        <Route path="/user/company" element={<UserCompany />} />
      </Routes>
    </div>
  );
};

const Home = () => <h1>Welcome to the Faker API</h1>;

export default App;
