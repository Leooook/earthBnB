import React, { Component } from 'react'

import Rooms from './rooms'
import load from '../images/load/load1.gif'

class ShowRoom extends Component {
  render() {
    const rooms = this.props.sortedRooms.map((room, index) => (
      <Rooms room={room} key={index} changeClass={true} />
    ))

    return (
      <div className="showRoom">
        {this.props.load ? (
          <img src={load} alt="loading" className="singlePageLoad" />
        ) : (
          rooms
        )}
      </div>
    )
  }
}

export default ShowRoom
