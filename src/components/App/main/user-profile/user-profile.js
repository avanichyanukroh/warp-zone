import React from 'react';
import '../../float-grid.css';
import "./user-profile.css";

export default function UserProfile(props) {

	return (
		<div>
			<div className="user-profile-info-container">
				<div className="row user-profile-info">
					<div className="col-8 user-profile-info-main">
						<img src="" className="profile-portrait" />
						<div className="user-profile-info-wrapper">
							<div className="username-display">
								<h2>Username</h2>
							</div>
							<div className="user-profile-real-name">
								<p>Real name</p>
							</div>
							<div className="user-profile-summary">
								<p>User profile summary</p>
							</div>
						</div>
					</div>
					<div className="col-4 user-profile-info-side">
						<div className="user-profile-info-wrapper">
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
				</div>
			</div>
			<div className="row user-profile-container">
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