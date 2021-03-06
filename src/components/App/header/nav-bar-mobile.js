import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../float-grid.css';
import './nav-bar-mobile.css';
import {Collapse} from 'react-collapse';
import SignUpAndLoginModal from './sign-up-and-login-modal';
import { renderSearchResults, logOutUser } from '../../../actions';

class NavBarMobile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "", 
			isOpened: false
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
		this.submitSearch = this.submitSearch.bind(this);
		this.handleCollapseMenu = this.handleCollapseMenu.bind(this);
	};

	handleInputChange(event) {

		this.setState({
			value: event.target.value
		})
	};

	handleLogOut() {
		this.props.dispatch(logOutUser());
	};

	handleCollapseMenu() {
		console.log("event happening");
		if (this.state.isOpened === false) {
			this.setState({isOpened: true})
		}
		else if (this.state.isOpened === true) {
			this.setState({isOpened: false})
		};
	};

	submitSearch(event) {
			event.preventDefault();
			const searchTerm = this.state.value;
			const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
			const IGDB_URL = "https://api-endpoint.igdb.com/games/?search=" + searchTerm + "&fields=id,name,url,summary,storyline,collection,rating,popularity,total_rating,total_rating_count,rating_count,developers,publishers,game_engines,category,time_to_beat,player_perspectives,game_modes,themes,genres,first_release_date,platforms,release_dates,alternative_names,screenshots,videos,cover,esrb,pegi,websites";
			fetch(PROXY_URL + IGDB_URL, {
				method: 'GET',
				headers: {
					"user-key": '0f9d8cb6b2a5a7df7d5a7449fa3c73a3',
					"accept": 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.then(data => {
				let itemsList = [];

				data.map(item => {
					if ("name" in item && "cover" in item && "first_release_date" in item) {
						itemsList.push(item);
					}
				});
				this.props.dispatch(renderSearchResults(itemsList, searchTerm));
				this.setState({value: ""});
			})
			.catch(err => {
				console.log(err);
			})
		};

	render() {
		const { gameSearchResults, searchTerm, redirectToSearchResults, loggedInUser, userProfile } = this.props;
		
			if (redirectToSearchResults) {
				return (

					<nav className="nav-bar-mobile-container">
						<h2><Link className="main-logo-mobile" to="/">Warp Zone</Link></h2>
						<i class="fas fa-align-justify fa-2x collapse-menu-icon" onClick={() => {this.handleCollapseMenu()}}></i>
						<Collapse isOpened={this.state.isOpened} fixedHeight={200}>

							<Redirect to={"/search-results?search=" + searchTerm} />

							<div className="search-bar-container">
								<form>
									<input 
										type="text" 
										placeholder="Search.." 
										name="search" 
										className="search-bar-input"
										value={this.state.value}
										onChange={this.handleInputChange} />
									<button 
										type="submit" 
										className="search-bar-btn"
										onClick={this.submitSearch}>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>
							<div className="signup-login-container" id="modal-display">
								<SignUpAndLoginModal />
							</div>
							<div className="clear-both"></div>
						</Collapse>
					</nav>
			);
		};

			if (!(loggedInUser === undefined || userProfile === undefined)) {

				return (

					<nav className="nav-bar-mobile-container">
						<div className="uncollapse-menu-container">
							<h2><Link className="main-logo-mobile" to="/">Warp Zone</Link></h2>
							<i class="fas fa-align-justify fa-2x collapse-menu-icon" onClick={() => {this.handleCollapseMenu()}}></i>
						</div>
						<Collapse isOpened={this.state.isOpened}>
							<div className="collapse-menu-container">
								<div className="username-display-container-mobile">
									<Link className="user-profile-link-mobile" to="/user-profile">{ !(userProfile === undefined) ? userProfile.username : null}</Link>
									<Link className="user-log-out-link-mobile" to="/" onClick={()=> {this.handleLogOut()}}><i className="fas fa-sign-out-alt fa-2x"></i></Link>
								</div>
								<div className="search-bar-container-mobile">
									<form>
										<input 
											type="text" 
											placeholder="Search.." 
											name="search" 
											className="search-bar-input-mobile"
											value={this.state.value}
											onChange={this.handleInputChange} />
										<button 
											type="submit" 
											className="search-bar-btn"
											onClick={this.submitSearch}>
											<i className="fa fa-search"></i>
										</button>
									</form>
								</div>
							</div>
							<div className="clear-both"></div>
						</Collapse>
					</nav>
			);
		}
		else {

			return (

				<nav className="nav-bar-mobile-container">
					<div className="uncollapse-menu-container">
						<h2><Link className="main-logo-mobile" to="/">Warp Zone</Link></h2>
						<i className="fas fa-align-justify fa-2x collapse-menu-icon" onClick={() => {this.handleCollapseMenu()}}></i>
					</div>
					<Collapse isOpened={this.state.isOpened}>
						<div className="collapse-menu-container">
							<div className="signup-login-container-mobile" id="modal-display">
								<SignUpAndLoginModal />
							</div>
							<div className="search-bar-container-mobile">
								<form>
									<input 
										type="text" 
										placeholder="Search.." 
										name="search" 
										className="search-bar-input-mobile"
										value={this.state.value}
										onChange={this.handleInputChange} />
									<button 
										type="submit" 
										className="search-bar-btn"
										onClick={this.submitSearch}>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>
						</div>
						<div className="clear-both"></div>
					</Collapse>
				</nav>
				);
		};
	};
};

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm,
	redirectToSearchResults: state.redirectToSearchResults,
	loggedInUser: state.loggedInUser,
	userProfile: state.userProfile
	
});

export default connect(mapStateToProps)(NavBarMobile);