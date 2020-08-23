import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/hero'
import Services from '../components/services'
import Feature from '../components/feature'

let MainPage = () => {
	return (
		<div>
			<Hero
				hero="heroMainPage"
				title="Get Out And Stretch Your Imagination"
				subtitle="You Don’t Have To Go Far To Find A World Of Wonder."
			>
				<Link to="/room-page" className="BannerBtn">
					{' '}
					EXPLORE {' '}
				</Link>
			</Hero>
			<Services />
			<Feature />
		</div>
	)
}

export default MainPage
