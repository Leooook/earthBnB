import React from 'react';

import Rooms from './rooms';
import load from '../images/load/load1.gif';

const ShowRoom = (props) => {
  const rooms = props.sortedRooms.map((room, index) => (
    <Rooms room={room} key={index} changeClass={true} />
  ));
  return (
    <div className='showRoom'>
      {props.load ? (
        <img src={load} alt='loading' className='singlePageLoad' />
      ) : (
        rooms
      )}
    </div>
  );
};

export default ShowRoom;
