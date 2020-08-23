import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======
>>>>>>> a1f832f... master

import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { RoomProvider } from './context.jsx'

ReactDOM.render(
	<RoomProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RoomProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
