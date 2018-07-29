import React from 'react';
import '../../float-grid.css';
import "./user-profile-side-info-section.css";

export default function UserProfileSideInfoSection(props) {

	return (
		
		<div className="col-4 user-profile-side-info-section-container">
			<div className="user-profile-side-info-section-wrapper">
				<div>
					<h2 className="user-profile-side-info-title">Platform</h2>
				</div>
				<div>
					<p>PC, Playstation 4, XBox One</p>
				</div>
			</div>
			<div className="user-profile-side-info-section-wrapper">
				<div>
					<h2 className="user-profile-side-info-title">Genre of Interest</h2>
				</div>
				<div>
					<p>Sci-fi shooter, Action RPG, MOBA, Fantasy MMORPG</p>
				</div>
			</div>
		</div>
		);
}