import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProfileBar.css';

const ProfileBar = ({ userName }) => {
  const [showName, setShowName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add event listener to listen for clicks outside of the options box
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="profile-bar  flex flex-col md:flex-row items-center justify-between bg-grey-200 relative ">
      <div className="flex items-center space-x-4">
        <div className="flex items-center relative">
          <img
            src={"https://media.istockphoto.com/id/1502422361/photo/design-professionals-using-a-laptop-together-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=V4JWz4y5HfafpdFEoJL-De7bb-Vj6tNN2goF9m9UFrA="}
            alt="Profile"
            className="rounded-full  md:h-15 md:w-5 p-2 border-2 border-white hover:scale-110 transition duration-300"
          />
        </div>
        <div className="ml-2">
            {showName && (
              <p className="text-gray-900 text-m md:text-3xl font-bold typing-animation">
                Hi, {userName} <span role="img" aria-label="Wave" className="inline-block w-10 h-13 md:w-15 md:h-25">👋</span> 
              </p>
            )}
        </div>
      </div>
      {/* Ellipsis menu */}
      <div ref={menuRef} className="relative top-0 right-0 mt-0.5 md:mt-1 mr-4">
          <button className= "ellipsis-btn text-2xl md:text-3xl font-bold" onClick={toggleMenu}>
            <span className="text-gray-900">...</span>
          </button>
          {menuOpen && (
              <div className="absolute top-0 right-2 mt-8 md-5 mr-4 md:mr-5 w-32 bg-transparent rounded-lg shadow-lg overflow-hidden z-10">
                <Link to="/edit-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Edit Profile</Link>
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { setAuth(false); toggleMenu(); }}>Log Out</Link>
              </div>
                )}
      </div>

    </div>
  );
};

export default ProfileBar;
