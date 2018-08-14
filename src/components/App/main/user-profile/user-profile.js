import React from 'react';
import '../../float-grid.css';
import './user-profile.css';
import UserProfileMainInfoSection from './user-profile-main-info-section';
import UserProfileSideInfoSection from './user-profile-side-info-section';
import UserProfileMainContentSection from './user-profile-main-content-section';
import UserProfileSideContentSection from './user-profile-side-content-section';

export default function UserProfile(props) {

	return (

		<div className="user-profile-container">
			<div className="row user-profile-info-container">
				<UserProfileMainInfoSection />
				<UserProfileSideInfoSection />
			</div>
			<div className="row user-profile-content-container">
					<UserProfileMainContentSection />
					<UserProfileSideContentSection />
			</div>
		</div>
		);
}