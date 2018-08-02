import React from 'react';
import '../float-grid.css';
import './nav-bar.css';
import SignUpAndLoginModal from './sign-up-and-login-modal';
import { withRouter } from 'react-router-dom';

export default class NavBar extends React.Component {
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
				this.setState({gameSearchResults: data});
				console.log(this.state);
				//this.props.history.push('/search-results');

			})
			.catch(err => {
				console.log(err);
			})
		};

	render() {
		const { gameSearchResults } = this.state;

		

		return (

			<div className="nav-bar-container">
				<nav>
					<h2>Warp Zone</h2>
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