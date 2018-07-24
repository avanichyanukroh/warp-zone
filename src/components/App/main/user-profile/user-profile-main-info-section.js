import React from 'react';
import '../../float-grid.css';
import "./user-profile-main-info-section.css";

export default function UserProfileMainInfoSection(props) {

	return (

		<div className="col-8 user-profile-main-info-section-container">
			<img src="" className="profile-portrait" />
			<div className="user-profile-main-info-section-wrapper">
				<div className="username-display">
					<h2>Username</h2>
				</div>
				<div className="user-profile-real-name">
					<p>Real name</p>
				</div>
				<div className="user-profile-main-info-summary">
					<p>User profile summary</p>
				</div>
			</div>
		</div>
		);
}