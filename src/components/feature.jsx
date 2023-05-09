import React, { useContext } from 'react';

import RoomContext from '../store/context';
import Load from './load';
import Rooms from './rooms';

const Feature = () => {
  const { featureRooms, load } = useContext(RoomContext);
  const rooms = featureRooms.map((room) => {
    return <Rooms key={room.id} room={room} changeClass={false} />;
  });

  return (
    <section className='featureRooms'>
      <h1 className='featureRoomsTit'> Feature Rooms </h1>
      <p className='featureRoomsInfo'>
        You don’t have to go far to find a world of wonder because we provide
        all kinds of rooms. Which one is your favorite?
      </p>
      <div className='featureRoomCenter'>{load ? <Load /> : rooms}</div>
    </section>
  );
};

export default Feature;
