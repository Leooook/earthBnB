import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/navBar'
import MainPage from './pages/mainPage'
import RoomPage from './pages/roomPage'
import SinglePage from './pages/singlePage'
import ErrorPage from './pages/errorPage'

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/room-page" component={RoomPage} />
					<Route exact path="/room-page/:slug" component={SinglePage} />
					<Route component={ErrorPage} />
				</Switch>
			</div>
		)
	}
}

export default App
