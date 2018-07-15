import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar.js';
import LandingPage from './components/landing-page.js';
import GameProfile from './components/game-profile.js';
import UserProfile from './components/user-profile.js';
import Footer from './components/footer.js';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header" role="banner">
						<NavBar />
					</header>
					<main role="main">
						<Route exact path="/" component={UserProfile} />
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
