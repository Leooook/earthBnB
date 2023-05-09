import React, { useContext } from 'react';

import Filter from './filter';
import ShowRoom from './showRoom';
import RoomContext from '../store/context';

const RoomOutlet = () => {
  let { sortedRooms, load } = useContext(RoomContext);
  return (
    <>
      <Filter />
      <ShowRoom sortedRooms={sortedRooms} load={load} />
    </>
  );
};

export default RoomOutlet;
