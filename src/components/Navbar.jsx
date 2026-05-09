import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, BookOpen, LayoutDashboard, Settings } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Database size={28} className="logo-icon" />
          <span className="text-gradient">SQLMastery</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/topics" className={`nav-link ${isActive('/topics')}`}>
              <BookOpen size={18} /> Topics
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin" className={`nav-link ${isActive('/admin')}`}>
              <Settings size={18} /> Admin
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
