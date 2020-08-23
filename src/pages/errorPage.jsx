import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/hero'

class ErrorPage extends Component {
	render() {
		return (
			<div>
				<Hero hero="heroOtherPage" title="Oops!" subtitle="Page Not Found">
					<Link to="/" className="BannerBtn">
						{' '}
						RETURN HOME{' '}
					</Link>
				</Hero>
			</div>
		)
	}
}

export default ErrorPage
