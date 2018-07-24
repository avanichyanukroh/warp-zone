import React from 'react';
import '../float-grid.css';
import './nav-bar.css';
import SignUpAndLoginModal from './sign-up-and-login-modal';

export default class NavBar extends React.Component {
	render() {

		function submitSearch(event) {
			event.preventDefault();
			const searchTerm = document.getElementById("searchInput").value;
			fetch("http://localhost:8000/api/")
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				})
		};

		return (
			<div className="nav-bar-container">
				<nav>
					<h2>Warp Zone</h2>
					<div className="search-bar-container">
						<input 
							type="text" 
							placeholder="Search.." 
							name="search" 
							className="search-bar-input"
							id="searchInput" />
		      			<button 
		      			type="submit" 
		      			className="search-bar-btn"
		      			onClick={submitSearch}><i className="fa fa-search"></i></button>
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