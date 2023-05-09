import React from 'react';

const RoomContext = React.createContext({
  rooms: [],
  sortedRooms: [],
  featureRooms: [],
  load: true,
  type: 'all',
  capacity: 'any',
  price: 0,
  maxPrice: 0,
  minPrice: 0,
  entire_home: false,
  self_checkin: false,
  pets: false,
  breakfast: false,
  handleChange: () => {},
  getRoom: () => {},
});

export default RoomContext;
