import React from 'react';
import '../App.css';
import "./game-profile.css";

export default function GameProfile(props) {

	return (
		<div>
			<div className="game-profile-banner">
			</div>
			<div className="row game-profile-container">
				<div className="col-8 main-content">
					main content
				</div>
				<div className="col-4 side-content">
					side content
				</div>
			</div>
		</div>
		);
}