import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/new" element={<User />} />
      <Route path="/companies/new" element={<Company />} />
      <Route path="/user/company" element={<UserCompany />} />
    </Routes>
  );
};

const Home = () => <h1>Welcome to the Faker API</h1>;
const User = () => <h1>New User</h1>;
const Company = () => <h1>New Company</h1>;
const UserCompany = () => <h1>New User and Company</h1>;

export default App;