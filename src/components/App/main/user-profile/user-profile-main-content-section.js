import React from 'react';
import '../../float-grid.css';
import "./user-profile-main-content-section.css";
import WishListSection from './wish-list-section';

export default function UserProfileMainContentSection(props) {

	return (

		<div className="col-8 user-profile-main-content-section-container">
			<div className="grid-separator-container">
				<WishListSection />
			</div>
		</div>
		);
}