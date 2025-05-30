import React, { useEffect, useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '/src/assets/images/logo.png';
import { AuthContext } from '../../context/AuthContext';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current?.classList.add('sticky__header');
      } else {
        headerRef.current?.classList.remove('sticky__header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
  };

  return (
      <header
      ref={headerRef}
      className="w-full bg-white py-4 shadow-md absolute top-0 left-0 z-50"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[140px]" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 m-0 p-0 items-center" ref={menuRef}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-primaryColor font-semibold text-[16px]'
                  : 'text-gray-800 hover:text-primaryColor font-medium text-[16px]'
              }
            >
              {link.display}
            </NavLink>
          ))}
        </nav>

        {/* Login / Profile */}
        <div className="flex items-center gap-4">
          {token && user ? (
            <Link
              to={`/${role === 'doctor' ? 'doctors/profile/me' : 'users/profile/me'}`}
              className="flex items-center gap-2"
            >
              <figure className="w-[35px] h-[35px] rounded-full overflow-hidden border border-gray-300">
                <img
                  src={user?.photo}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </figure>
              <span className="text-sm font-semibold text-gray-800">{user?.name}</span>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-primaryColor text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden">
            <BiMenu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden px-4 mt-2">
        <ul
          ref={menuRef}
          className="hidden flex-col gap-3 bg-white p-4 border rounded shadow-md"
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className="text-gray-800 hover:text-primaryColor block"
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
