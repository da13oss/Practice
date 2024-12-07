import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Cart } from './pages/cart/Cart';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Account } from './pages/account/Account';
import { Checkout } from './pages/checkout/Checkout';
import { Customize } from './pages/customize/Customize';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;