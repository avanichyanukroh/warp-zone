import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar.js';
import LandingPage from './components/landing-page.js';
import Footer from './components/footer.js';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<NavBar />
					</header>
					<main>
						<LandingPage />
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
