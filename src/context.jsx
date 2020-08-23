import React, { Component } from 'react'

import data from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
	state = {
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
		breakfast: false
	}

	componentDidMount() {
		let rooms = this.formatData(data)
		let sortedRooms = rooms
		let featureRooms = rooms.filter((room) => room.featured === true)
		let maxPrice = Math.max(...rooms.map((room) => room.price))

		this.setState({
			rooms,
			sortedRooms,
			featureRooms,
			load: false,
			price: maxPrice,
			maxPrice
		})
	}

	formatData = (data) => {
		let tempData = data.map((data) => {
			let id = data.sys.id
			let images = data.fields.images.map((image) => image.fields.file.url)
			let rooms = { ...data.fields, id, images }
			return rooms
		})

		return tempData
	}

	getRoom = (slug) => {
		let newSlug = slug.slice(1)
		return this.state.rooms.find((room) => room.slug === newSlug)
	}

  // Get filter events.
	handleChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({ [name]: value }, this.filterRooms)
	}

	filterRooms = () => {
		let { rooms, type, capacity, price, maxPrice, entire_home, self_checkin, pets, breakfast } = this.state
		let tmpRooms = [ ...rooms ]

		if (type !== 'all') {
			tmpRooms = tmpRooms.filter((room) => room.type === type)
		}
		if (capacity !== 'any') {
			tmpRooms = tmpRooms.filter((room) => room.capacity === parseInt(capacity))
		}
		if (parseInt(price) !== maxPrice) {
			tmpRooms = tmpRooms.filter((room) => room.price <= parseInt(price))
		}
		if (entire_home === true) {
			tmpRooms = tmpRooms.filter((room) => room.entire_home === true)
		}
		if (self_checkin === true) {
			tmpRooms = tmpRooms.filter((room) => room.self_checkin === true)
		}
		if (pets === true) {
			tmpRooms = tmpRooms.filter((room) => room.pets === true)
		}
		if (breakfast === true) {
			tmpRooms = tmpRooms.filter((room) => room.breakfast === true)
		}

		this.setState({ sortedRooms: tmpRooms })
	}

	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

const RoomConsumer = RoomContext.Consumer

function withConsumer(Component) {
	return function consumerWrapper(props) {
		return <RoomConsumer>{(value) => <Component {...props} context={value} />}</RoomConsumer>
	}
}

export { withConsumer, RoomContext, RoomProvider }
