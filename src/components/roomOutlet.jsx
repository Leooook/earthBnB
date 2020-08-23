import React, { Component } from 'react'

import { withConsumer } from '../context'
import Filter from './filter'
import ShowRoom from './showRoom'

class RoomOutlet extends Component {
  render() {
    let { sortedRooms, load } = this.props.context

    return (
      <div>
        <Filter />
        <ShowRoom sortedRooms={sortedRooms} load={load} />
      </div>
    )
  }
}

export default withConsumer(RoomOutlet)
