// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-200 shadow-md font-sans">
      <div className="text-2xl font-bold text-yellow-800">🐝 Buddle Code</div>
      <ul className="flex gap-6 text-yellow-700 font-medium">
        <li><Link to="/" className="hover:text-black">Home</Link></li>
        <li><Link to="/school" className="hover:text-black">School</Link></li>
        <li><Link to="/college" className="hover:text-black">College</Link></li>
        <li><Link to="/signin" className="hover:text-black">Sign In</Link></li>
        <li><Link to="/mrsbee" className="hover:text-black">Mrs Bee AI</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
