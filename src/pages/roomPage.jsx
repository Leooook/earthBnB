import React from 'react';

import Hero from '../components/hero';
import RoomOutlet from '../components/roomOutlet';

const RoomPage = () => {
  return (
    <>
      <Hero
        hero='heroRoomPage'
        title='Explore Homes With Instant Booking'
        subtitle='Unique Activities To Do From Home, Including Experiences With Top Creators'
        link='RETURN HOME'
      ></Hero>
      <RoomOutlet />
    </>
  );
};

export default RoomPage;
