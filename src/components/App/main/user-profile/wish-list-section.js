import React from 'react';
import '../../float-grid.css';
import "./wish-list-section.css";

export default function WishListSection(props) {

	return (

		<div className="wish-list-section-container">
			<h3>WishList</h3>
			<br/>
			<ul className="wish-list-container">
				<li className="wish-list-item">Game 1</li>
				<li className="wish-list-item">Game 2</li>
				<li className="wish-list-item">Game 3</li>
				<li className="wish-list-item">Game 4</li>
			</ul>
		</div>
		);
}