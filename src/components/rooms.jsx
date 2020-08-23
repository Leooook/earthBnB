import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const Rooms = memo(({ room, changeClass }) => {
	const { name, price, slug, images } = room

	return (
		<article className={changeClass === true ? 'newRooms' : 'rooms'}>
			<div className="roomContainer">
				<img className="roomImg" src={images[3]} alt={name} />
				<div className="priceContainer">
					<h5 className="price"> ${price} </h5>
					<p className="pricePer"> per night </p>
				</div>
				<Link className="roomFeatures" to={`/room-page/:${slug}`}>
					{' '}
					Features{' '}
				</Link>
			</div>
			<div className="roomBottom"> {name} </div>
		</article>
	)
})

Rooms.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired
	})
}

export default Rooms
