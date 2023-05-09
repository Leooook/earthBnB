import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import m1 from '../images/heroMain/main-1.jpg';
import m2 from '../images/heroMain/main-2.jpg';
import m3 from '../images/heroMain/main-3.jpg';
import r1 from '../images/heroRoom/room-1.jpg';
import r2 from '../images/heroRoom/room-2.jpg';
import r3 from '../images/heroRoom/room-3.jpg';

// Get random hero pictures.
const m = [m1, m2, m3];
const r = [r1, r2, r3];
const getRandomPic = () => {
  const randomNum = parseInt(Math.random() * 3);
  const pic = [m[randomNum], r[randomNum]];
  return pic;
};

const Hero = ({ hero = 'heroMainPage', title, subtitle, link }) => {
  const pic = getRandomPic();
  const url = link === 'EXPLORE' ? 'room-page' : '/';
  return (
    <header
      className={hero}
      style={
        hero === 'heroRoomPage'
          ? { backgroundImage: `url(${pic[1]})` }
          : { backgroundImage: `url(${pic[0]})` }
      }
    >
      <div className='banner'>
        <h1 className='bannerTitle'>{title}</h1>
        <div className='bannerDiv' />
        <p className='bannerSubtitle'>{subtitle}</p>
        <Link to={url} className='BannerBtn'>
          {link}
        </Link>
      </div>
    </header>
  );
};

Hero.prototype = {
  hero: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitile: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Hero;
