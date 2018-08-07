import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import NavBar from './header/nav-bar';
import Home from './main/home/home';
import SearchResults from './main/search-results/search-results'
import GameProfile from './main/game-profile/game-profile';
import UserProfile from './main/user-profile/user-profile';
import Footer from './footer/footer.js';


export class App extends Component {
	render() {

		const { redirectToSearchResults } = this.props;
		console.log(redirectToSearchResults);

		return (
			
			<Router>
				<div className="App">
					<header className="App-header" role="banner">
						<NavBar />
					</header>
					<main role="main" id="main">
						<Route exact path="/" component={Home} />
						<Route exact path="/search-results" component={SearchResults} />
						<Route exact path="/game-profile" component={GameProfile} />
						<Route exact path="/user-profile" component={UserProfile} />
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	redirectToSearchResults: state.redirectToSearchResults,
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(App);