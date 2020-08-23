import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GoGlobe, GoGrabber } from 'react-icons/go'

class NavBar extends Component {
	state = {
		isOpen: false
	}

	// Open menu, when timeout it will be closed.
	handleToddle = () => {
		this.setState({ isOpen: !this.state.isOpen })
		setTimeout(() => {
			this.setState({ isOpen: !this.state.isOpen })
		}, 7000)
	}

	render() {
		return (
			<nav className="navBar">
				<div className="navCenter">
					<div className="navHeader">
						<Link to="/" onClick={() => window.scrollTo(0, 0)}>
							<GoGlobe className="navLogo" />
							<p className="navTitle">Earth BnB</p>
						</Link>
						{/* <div className='navSearchDiv'>
                            <input className='navSearch' placeholder=' where are you going ?' />
                            <GoSearch className='navSearchBtn' />
                        </div> */}
						<button type="button" onClick={this.handleToddle} className="navButton">
							<GoGrabber />
						</button>
					</div>
					<ul className={this.state.isOpen ? 'navLinks showNav' : 'navLinks'}>
						<li>
							<Link to="/"> Home </Link>
						</li>
						<li>
							<Link to="/room-page"> Rooms </Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar
