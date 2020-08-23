import React, { Component } from 'react'
import { RoomContext } from '../context'

class Filter extends Component {
	static contextType = RoomContext

	// Filter each elements to unique.
	isUnique = (index, rooms) => {
		return this.sort([ ...new Set(rooms.map((room) => room[index])) ])
	}

	// Bubble sort for numbers
	sort = (arr) => {
		var len = arr.length
		for (var i = 0; i < len - 1; i++) {
			for (var j = 0; j < len - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					var temp = arr[j + 1]
					arr[j + 1] = arr[j]
					arr[j] = temp
				}
			}
		}
		return arr
	}

	render() {
		let {
			rooms,
			handleChange,
			type,
			capacity,
			price,
			maxPrice,
			minPrice,
			entire_home,
			self_checkin,
			pets,
			breakfast
		} = this.context

		const myType = [ 'all', ...this.isUnique('type', rooms) ]
		const myCapacity = [ 'any', ...this.isUnique('capacity', rooms) ]

		return (
			<section className="filter">
				<h1 className="filterTitle"> Search Rooms </h1>
				<form className="filterForm">
					<div className="eachFilter">
						<label className="filterLabel" htmlFor="type">
							{' '}
							Type{' '}
						</label>
						<select name="type" onChange={handleChange} className="filterSelect" value={type}>
							{myType.map((type, index) => (
								<option key={index} value={type} className="filterOption">
									{type}
								</option>
							))}
						</select>
					</div>
					<div className="eachFilter">
						<label className="filterLabel" htmlFor="capacity">
							{' '}
							Person{' '}
						</label>
						<select name="capacity" onChange={handleChange} className="filterSelect" value={capacity}>
							{myCapacity.map((capacity, index) => (
								<option key={index} value={capacity} className="filterOption">
									{capacity}
								</option>
							))}
						</select>
					</div>
					<div className="eachFilter">
						<label className="filterLabel" htmlFor="price">
							{' '}
							Room Price: &nbsp; ${price}{' '}
						</label>
						<input
							type="range"
							name="price"
							min={minPrice}
							max={maxPrice}
							value={price}
							onChange={handleChange}
							step={10}
							className="filterInput"
						/>
					</div>
					<div className="checkBox">
						<div className="eachFilter">
							<input
								type="checkbox"
								name="entire_home"
								checked={entire_home}
								onChange={handleChange}
								className="filterCheckbox"
							/>
							<label htmlFor="entire_home"> Entire Room </label>
						</div>
						<div className="eachFilter">
							<input
								type="checkbox"
								name="self_checkin"
								checked={self_checkin}
								onChange={handleChange}
								className="filterCheckbox"
							/>
							<label htmlFor="self_checkin"> Self Checkin </label>
						</div>
					</div>
					<div className="checkBox">
						<div className="eachFilter">
							<input
								type="checkbox"
								name="pets"
								value={pets}
								onChange={handleChange}
								className="filterCheckbox"
							/>
							<label htmlFor="pets"> Pets allowed </label>
						</div>
						<div className="eachFilter">
							<input
								type="checkbox"
								name="breakfast"
								checked={breakfast}
								onChange={handleChange}
								className="filterCheckbox"
							/>
							<label htmlFor="breakfast"> Breakfast</label>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

export default Filter
