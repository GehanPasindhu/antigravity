import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Research', href: '#research' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Ama Gomes<span style={{ color: 'var(--accent-color)' }}>.</span></a>

          {/* Desktop Menu - Hidden on Mobile */}
          <ul className="nav-links hidden-mobile">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="nav-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn hidden-desktop" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '70px', // Adjust based on navbar height
              left: 0,
              width: '100%',
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1rem',
              zIndex: 999
            }}
            className="hidden-desktop"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="nav-link" 
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '1.1rem', display: 'block', padding: '0.5rem 0' }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
