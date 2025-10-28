import React from 'react';
import '../styles/Navbar.css'; 
import Logo from '../assets/logo.png';

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a href={href} className="nav-link">
    {label}
  </a>
);

const RegisterButton: React.FC = () => (
  <a href="/register" className="register-button">
    Register Now
    <span className="arrow-icon">→</span>
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        <div className="navbar-logo">
          <img src={Logo} alt="logo" className="logo-img" />
          
        </div>

        <div className="navbar-links">
          <NavLink href="/" label="Home" />
          <NavLink href="/features" label="Features" />
          <NavLink href="/community" label="Community" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/pricing" label="Pricing" />
        </div>

        <div className="navbar-actions">
          <RegisterButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;