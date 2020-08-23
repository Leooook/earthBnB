import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/hero'
import RoomOutlet from '../components/roomOutlet'

class RoomPage extends Component {
	render() {
		return (
			<div>
				<Hero
					hero="heroRoomPage"
					title="Explore Homes With Instant Booking"
					subtitle="Unique Activities To Do From Home, Including Experiences With Top Creators"
				>
					<Link to="/" className="BannerBtn">
						{' '}
						RETURN HOME{' '}
					</Link>
				</Hero>
				<RoomOutlet />
			</div>
		)
	}
}

export default RoomPage
