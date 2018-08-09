import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../float-grid.css';
import './nav-bar.css';
import SignUpAndLoginModal from './sign-up-and-login-modal';
import { renderSearchResults } from '../../../actions';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gameSearchResults: []
		};

		this.submitSearch = this.submitSearch.bind(this);
	};

	submitSearch(event) {
			event.preventDefault();
			const searchTerm = document.getElementById("searchInput").value;
			const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
			const IGDB_URL = "https://api-endpoint.igdb.com/games/?search=" + searchTerm + "&fields=id,name,url,summary,storyline,collection,rating,popularity,total_rating,total_rating_count,rating_count,developers,publishers,game_engines,category,time_to_beat,player_perspectives,game_modes,themes,genres,first_release_date,platforms,release_dates,alternative_names,screenshots,videos,cover,esrb,pegi,websites";
			fetch(PROXY_URL + IGDB_URL, {
				method: 'GET',
				headers: {
					"user-key": '15870042b514b393825fc09f6b04056b',
					"accept": 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				let itemsList = [];

				data.map(item => {
					if ("name" in item && "cover" in item && "first_release_date" in item) {
						itemsList.push(item);
					}
				});
				this.props.dispatch(renderSearchResults(itemsList, searchTerm));
				document.getElementById("searchInput").value = "";
			})
			.catch(err => {
				console.log(err);
			})
		};

	render() {
		const { gameSearchResults, searchTerm, redirectToSearchResults } = this.props;
		
			if (redirectToSearchResults) {
				return (

					<div className="nav-bar-container">
						<Redirect to={"/search-results?search=" + searchTerm} />
						<nav>
							<h2><Link className="main-logo" to="/">Warp Zone</Link></h2>
							<div className="search-bar-container">
								<form>
									<input 
										type="text" 
										placeholder="Search.." 
										name="search" 
										className="search-bar-input"
										id="searchInput" />
									<button 
										type="submit" 
										className="search-bar-btn"
										onClick={this.submitSearch}>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>
							<ul>
								<li>Link</li>
								<li>Link</li>
								<li>Link</li>
							</ul>
							<div className="signup-login-container" id="modal-display">
								<SignUpAndLoginModal />
							</div>
							<div className="clear-both"></div>
						</nav>
					</div>
				);
			};

		return (

			<div className="nav-bar-container">
				<nav>
					<h2><Link className="main-logo" to="/">Warp Zone</Link></h2>
					<div className="search-bar-container">
						<form>
							<input 
								type="text" 
								placeholder="Search.." 
								name="search" 
								className="search-bar-input"
								id="searchInput" />
							<button 
								type="submit" 
								className="search-bar-btn"
								onClick={this.submitSearch}>
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div>
					<ul>
						<li>Link</li>
						<li>Link</li>
						<li>Link</li>
					</ul>
					<div className="signup-login-container" id="modal-display">
						<SignUpAndLoginModal />
					</div>
					<div className="clear-both"></div>
				</nav>
			</div>
			);
		}
}

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm,
	redirectToSearchResults: state.redirectToSearchResults
});

export default connect(mapStateToProps)(NavBar);