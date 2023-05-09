import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosPricetag } from 'react-icons/io';
import { BsHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { GiFamilyHouse } from 'react-icons/gi';
import { FaDoorClosed } from 'react-icons/fa';
import { MdFreeBreakfast, MdPets } from 'react-icons/md';
import GoogleMapReact from 'google-map-react';

import RoomContext from '../store/context';
import load from '../images/load/load1.gif';

const SinglePage = () => {
  const contextType = useContext(RoomContext);
  const params = useParams().slug;

  let [singlePageState, setSinglePageState] = useState({
    name: null,
    type: null,
    price: null,
    capacity: null,
    entire_home: null,
    self_checkin: null,
    breakfast: null,
    pets: null,
    description: null,
    extras: [],
    images: [],
  });

  useEffect(() => {
    setSinglePageState({ ...contextType.getRoom(params) });
  }, [contextType, params]);

  const changeImg = (index) => {
    const images = singlePageState.images;
    const tmpImage = images[0];
    images[0] = images[index];
    images[index] = tmpImage;
    setSinglePageState({ ...singlePageState, images });
  };

  if (!singlePageState.name) {
    return (
      <div className='singlePage'>
        <img src={load} alt='loading' className='singlePageLoad' />
      </div>
    );
  } else {
    return (
      <div className='singlePage'>
        <h3 className='singlePageName'> {singlePageState.name} </h3>
        <section className='singlePageImgDiv'>
          <img
            src={singlePageState.images[0]}
            alt={singlePageState.name}
            className='singlePageImgMain'
          />
          <div>
            <img
              src={singlePageState.images[1]}
              alt={singlePageState.name}
              onClick={() => changeImg(1)}
              className='singlePageImg'
            />
            <img
              src={singlePageState.images[2]}
              alt={singlePageState.name}
              onClick={() => changeImg(2)}
              className='singlePageImg'
            />
            <img
              src={singlePageState.images[3]}
              alt={singlePageState.name}
              onClick={() => changeImg(3)}
              className='singlePageImg'
            />
          </div>
        </section>
        <div className='singlePageM'>
          <div>
            <section className='singlePageDetails'>
              <h1 className='singlePageTitle'> Details </h1>
              <p className='singlePagePara'> {singlePageState.description} </p>
            </section>
            <section className='singlePageExtras'>
              <h1 className='singlePageTitle1'> Extras </h1>
              {singlePageState.extras.map((item, index) => (
                <li className='singlePagePara' key={index}>
                  - {item}
                </li>
              ))}
            </section>
          </div>
          <section className='singlePageInfo'>
            <h1 className='singlePageTitle'> Info </h1>
            <div className='eachSinglePageInfo'>
              <IoIosPricetag className='singlePageInfoTag' />
              <p className='singlePageInfoP'>Price:</p>
              <p className='singlePageInfoP1'>${singlePageState.price}</p>
            </div>
            <div className='eachSinglePageInfo'>
              <BsHouseFill className='singlePageInfoTag' />
              <p className='singlePageInfoP'>Type:</p>
              <p className='singlePageInfoP1'>{singlePageState.type}</p>
            </div>
            <div className='eachSinglePageInfo'>
              <BsFillPeopleFill className='singlePageInfoTag' />
              <p className='singlePageInfoP'>Max capacity:</p>
              <p className='singlePageInfoP1'>
                {singlePageState.capacity} person
              </p>
            </div>
            {singlePageState.entire_home === true ? (
              <div className='eachSinglePageInfo'>
                <GiFamilyHouse className='singlePageInfoTag' />
                <p className='singlePageInfoP'>Entire home </p>
                <br />{' '}
                <p className='singlePageInfoP2'>
                  You’ll have the {singlePageState.type} to yourself.
                </p>
              </div>
            ) : (
              <></>
            )}
            {singlePageState.self_checkin === true ? (
              <div className='eachSinglePageInfo'>
                <FaDoorClosed className='singlePageInfoTag' />
                <p className='singlePageInfoP'>Self check-in</p>
                <br />{' '}
                <p className='singlePageInfoP2'>
                  Check yourself in with the lockbox.
                </p>
              </div>
            ) : (
              <></>
            )}
            {singlePageState.breakfast === true ? (
              <div className='eachSinglePageInfo'>
                <MdFreeBreakfast className='singlePageInfoTag' />
                <p className='singlePageInfoP'>breakfast</p>
                <br />{' '}
                <p className='singlePageInfoP2'>
                  Hoster will provide breakfast for you.
                </p>
              </div>
            ) : (
              <></>
            )}
            {singlePageState.pets === true ? (
              <div className='eachSinglePageInfo'>
                <MdPets className='singlePageInfoTag' />
                <p className='singlePageInfoP'>Pets</p>
                <br /> <p className='singlePageInfoP2'>Pets will be allowed.</p>
              </div>
            ) : (
              <></>
            )}
          </section>
        </div>
        <div className='singlePageMap'>
          <h1 className='singlePageTitle'>Location</h1>
          <GoogleMapReact
            // Just for try.
            bootstrapURLKeys={'AIzaSyBZcb6yXiR1YCKTUVuozXvD3ue-c3wDK48'}
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            defaultZoom={11}
          />
        </div>
      </div>
    );
  }
};

export default SinglePage;
