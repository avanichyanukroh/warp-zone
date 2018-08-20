import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import NavBar from './header/nav-bar';
import NavBarMobile from './header/nav-bar-mobile';
import MediaQuery from 'react-responsive';
import Home from './main/home/home';
import SearchResults from './main/search-results/search-results'
import GameProfile from './main/game-profile/game-profile';
import UserProfile from './main/user-profile/user-profile';
import Footer from './footer/footer.js';


export class App extends React.Component {
	render() {

		const { redirectToSearchResults } = this.props;
		console.log(redirectToSearchResults);

		return (
			
			<Router>
				<div className="App">
					<header className="App-header" role="banner">
						<MediaQuery query="(min-width: 640px)">
							<NavBar className="NavBar" />
						</MediaQuery>
						<MediaQuery query="(max-width: 640px)">
							<NavBarMobile className="NavBar-mobile" />
						</MediaQuery>
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