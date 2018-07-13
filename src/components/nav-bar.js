import React from 'react';
import '../App.css';
import './nav-bar.css';


export default function NavBar(props) {

	return (
		<div className="row">
			<nav className="col-12">
				<input type="text" placeholder="Search.." name="search" />
      			<button type="submit"><i className="fa fa-search"></i></button>
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