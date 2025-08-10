
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-black text-white z-50">
      <h1 className="text-5xl font-signature cursor-default">Dhanushraj</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize font-medium text-gray-400 hover:text-white cursor-pointer transition duration-300">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNavOpen(!navOpen)}
        className="md:hidden cursor-pointer text-gray-400 hover:text-white z-50"
        aria-label="Toggle menu"
      >
        {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 text-2xl space-y-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize cursor-pointer hover:text-white transition duration-300"
              onClick={() => setNavOpen(false)} // Close menu on click
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>

          ))}
        </ul>
      )}
    </nav>

  );
};

export default NavBar;
