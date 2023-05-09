import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import data from './data';
import RoomContext from './store/context';
import NavBar from './components/navBar';
import MainPage from './pages/mainPage';
import RoomPage from './pages/roomPage';
import SinglePage from './pages/singlePage';
import ErrorPage from './pages/errorPage';

const App = () => {
  // Create context element
  const [appRooms, setAppRooms] = useState({
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
  });

  // Get data
  const formatData = (data) => {
    return data.map((data) => {
      return {
        ...data.fields,
        id: data.sys.id,
        images: data.fields.images.map((image) => image.fields.file.url),
      };
    });
  };

  const getData = useCallback(() => {
    const rooms = formatData(data);
    let sortedRooms = rooms;
    const featureRooms = rooms.filter((room) => room.featured === true); // get feature rooms
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    setAppRooms({
      ...appRooms,
      rooms,
      sortedRooms,
      featureRooms,
      maxPrice,
      price: maxPrice,
      load: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);

  // GetRoom is a Context function, slug is the room number
  const getRoom = (slug) => {
    return appRooms.rooms.find((room) => room.slug === slug.slice(1));
  };

  // Get the room filter context function
  const handleChange = (event) => {
    const target = event.target;

    let changeValue = {
      ...appRooms,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    };

    filterRooms(changeValue);
  };

  const filterRooms = (changeValue) => {
    const {
      rooms,
      type,
      capacity,
      price,
      maxPrice,
      entire_home,
      self_checkin,
      pets,
      breakfast,
    } = changeValue;
    let tmpRooms = [...rooms];

    if (type !== 'all') {
      tmpRooms = tmpRooms.filter((room) => room.type === type);
    }
    if (capacity !== 'any') {
      tmpRooms = tmpRooms.filter(
        (room) => room.capacity === parseInt(capacity)
      );
    }
    if (parseInt(price) !== maxPrice) {
      tmpRooms = tmpRooms.filter((room) => room.price <= parseInt(price));
    }
    if (entire_home === true) {
      tmpRooms = tmpRooms.filter((room) => room.entire_home === true);
    }
    if (self_checkin === true) {
      tmpRooms = tmpRooms.filter((room) => room.self_checkin === true);
    }
    if (pets === true) {
      tmpRooms = tmpRooms.filter((room) => room.pets === true);
    }
    if (breakfast === true) {
      tmpRooms = tmpRooms.filter((room) => room.breakfast === true);
    }

    setAppRooms((prevState) => ({
      ...prevState,
      ...changeValue,
      sortedRooms: tmpRooms,
    }));
  };

  return (
    <RoomContext.Provider value={{ ...appRooms, handleChange, getRoom }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='room-page' element={<RoomPage />} />
        <Route path='room-page/:slug' element={<SinglePage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </RoomContext.Provider>
  );
};

export default App;
