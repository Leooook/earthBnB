import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { GoGlobe, GoGrabber } from 'react-icons/go';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open menu, when timeout it will be closed.
  const handleToddle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navBar'>
      <div className='navCenter'>
        <div className='navHeader'>
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            <GoGlobe className='navLogo' />
            <p className='navTitle'>Earth BnB</p>
          </Link>
          <button type='button' onClick={handleToddle} className='navButton'>
            <GoGrabber />
          </button>
        </div>
        <ul className={isOpen ? 'navLinks showNav' : 'navLinks'}>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/room-page'> Rooms </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
