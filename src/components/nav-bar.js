import React from 'react';
import '../App.css';
import './nav-bar.css';


export default function NavBar(props) {

	return (
		<div className="nav-bar-container">
			<nav>
				<h2>Warp Zone</h2>
				<div className="search-bar-container">
					<input type="text" placeholder="Search.." name="search" className="search-bar-input" />
	      			<button type="submit" className="search-bar-btn"><i className="fa fa-search"></i></button>
      			</div>
				<ul>
					<li>Link</li>
					<li>Link</li>
					<li>Link</li>
				</ul>
				<div className="signup-login-container">
					<button className="signup-login-btn">Sign up</button>
					<button className="signup-login-btn">Log in</button>
				</div>
				<div className="clear-both"></div>
			</nav>
		</div>
		);
}