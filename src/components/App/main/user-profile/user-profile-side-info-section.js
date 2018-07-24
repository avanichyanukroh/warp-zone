import React from 'react';
import '../../float-grid.css';
import "./user-profile-side-info-section.css";

export default function UserProfileSideInfoSection(props) {

	return (
		
		<div className="col-4 user-profile-side-info-section-container">
			<div className="user-profile-side-info-section-wrapper">
				<div>
					<h2>Info section</h2>
				</div>
				<div>
					<p>Some info</p>
				</div>
				<div>
					<p>Some more info</p>
				</div>
			</div>
		</div>
		);
}