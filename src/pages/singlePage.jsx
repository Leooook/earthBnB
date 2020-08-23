import React, { Component } from 'react'
import { IoIosPricetag } from 'react-icons/io'
import { BsHouseFill, BsFillPeopleFill } from 'react-icons/bs'
import { GiFamilyHouse } from 'react-icons/gi'
import { FaDoorClosed } from 'react-icons/fa'
import { MdFreeBreakfast, MdPets } from 'react-icons/md'
import GoogleMapReact from 'google-map-react'

import { RoomContext } from '../context'
import load from '../images/load/load1.gif'

class SinglePage extends Component {
  static contextType = RoomContext

  state = {
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
  }

  componentDidMount() {
    let room = this.context.getRoom(this.props.match.params.slug)
    if (room) {
      const {
        name,
        type,
        price,
        capacity,
        entire_home,
        self_checkin,
        breakfast,
        pets,
        description,
        extras,
        images,
      } = room
      this.setState({
        name,
        type,
        price,
        capacity,
        entire_home,
        self_checkin,
        breakfast,
        pets,
        description,
        extras,
        images,
      })
    }
  }

  componentWillReceiveProps() {
    let room = this.context.getRoom(this.props.match.params.slug)
    const {
      name,
      type,
      price,
      capacity,
      entire_home,
      self_checkin,
      breakfast,
      pets,
      description,
      extras,
      images,
    } = room
    this.setState({
      name,
      type,
      price,
      capacity,
      entire_home,
      self_checkin,
      breakfast,
      pets,
      description,
      extras,
      images,
    })
  }

  changeImg = (index) => {
    const images = this.state.images
    const tmpImage = images[0]
    images[0] = images[index]
    images[index] = tmpImage
    this.setState({ images })
  }

  render() {
    if (!this.state.name) {
      return (
        <div className="singlePage">
          <img src={load} alt="loading" className="singlePageLoad" />
        </div>
      )
    } else {
      return (
        <div className="singlePage">
          <h3 className="singlePageName"> {this.state.name} </h3>
          <section className="singlePageImgDiv">
            <img
              src={this.state.images[0]}
              alt={this.state.name}
              className="singlePageImgMain"
            />
            <div>
              <img
                src={this.state.images[1]}
                alt={this.state.name}
                onClick={() => this.changeImg(1)}
                className="singlePageImg"
              />
              <img
                src={this.state.images[2]}
                alt={this.state.name}
                onClick={() => this.changeImg(2)}
                className="singlePageImg"
              />
              <img
                src={this.state.images[3]}
                alt={this.state.name}
                onClick={() => this.changeImg(3)}
                className="singlePageImg"
              />
            </div>
          </section>
          <div className="singlePageM">
            <div>
              <section className="singlePageDetails">
                <h1 className="singlePageTitle"> Details </h1>
                <p className="singlePagePara"> {this.state.description} </p>
              </section>
              <section className="singlePageExtras">
                <h1 className="singlePageTitle1"> Extras </h1>
                {this.state.extras.map((item, index) => (
                  <li className="singlePagePara" key={index}>
                    - {item}
                  </li>
                ))}
              </section>
            </div>
            <section className="singlePageInfo">
              <h1 className="singlePageTitle"> Info </h1>
              <div className="eachSinglePageInfo">
                <IoIosPricetag className="singlePageInfoTag" />
                <p className="singlePageInfoP">Price:</p>
                <p className="singlePageInfoP1">${this.state.price}</p>
              </div>
              <div className="eachSinglePageInfo">
                <BsHouseFill className="singlePageInfoTag" />
                <p className="singlePageInfoP">Type:</p>
                <p className="singlePageInfoP1">{this.state.type}</p>
              </div>
              <div className="eachSinglePageInfo">
                <BsFillPeopleFill className="singlePageInfoTag" />
                <p className="singlePageInfoP">Max capacity:</p>
                <p className="singlePageInfoP1">{this.state.capacity} person</p>
              </div>
              {this.state.entire_home === true ? (
                <div className="eachSinglePageInfo">
                  <GiFamilyHouse className="singlePageInfoTag" />
                  <p className="singlePageInfoP">Entire home </p>
                  <br />{' '}
                  <p className="singlePageInfoP2">
                    You’ll have the {this.state.type} to yourself.
                  </p>
                </div>
              ) : (
                <></>
              )}
              {this.state.self_checkin === true ? (
                <div className="eachSinglePageInfo">
                  <FaDoorClosed className="singlePageInfoTag" />
                  <p className="singlePageInfoP">Self check-in</p>
                  <br />{' '}
                  <p className="singlePageInfoP2">
                    Check yourself in with the lockbox.
                  </p>
                </div>
              ) : (
                <></>
              )}
              {this.state.breakfast === true ? (
                <div className="eachSinglePageInfo">
                  <MdFreeBreakfast className="singlePageInfoTag" />
                  <p className="singlePageInfoP">breakfast</p>
                  <br />{' '}
                  <p className="singlePageInfoP2">
                    Hoster will provide breakfast for you.
                  </p>
                </div>
              ) : (
                <></>
              )}
              {this.state.pets === true ? (
                <div className="eachSinglePageInfo">
                  <MdPets className="singlePageInfoTag" />
                  <p className="singlePageInfoP">Pets</p>
                  <br />{' '}
                  <p className="singlePageInfoP2">Pets will be allowed.</p>
                </div>
              ) : (
                <></>
              )}
            </section>
          </div>
          <div className="singlePageMap">
            <h1 className="singlePageTitle">Location</h1>
            <GoogleMapReact
            // Just for try.
              bootstrapURLKeys={'AIzaSyBZcb6yXiR1YCKTUVuozXvD3ue-c3wDK48'}
              defaultCenter={{ lat: 59.95, lng: 30.33 }}
              defaultZoom={11}
            />
          </div>
        </div>
      )
    }
  }
}

export default SinglePage
