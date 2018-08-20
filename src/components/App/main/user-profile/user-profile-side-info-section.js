import React from 'react';
import ReactModal from 'react-modal';
import '../../float-grid.css';
import "./user-profile-side-info-section.css";
import { connect } from 'react-redux';
import EditUserProfileModal from './edit-user-profile-modal';

class UserProfileSideInfoSection extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { userProfile } = this.props;
		return (
			
			<div className="col-4-alt user-profile-side-info-section-container">
				<EditUserProfileModal />
				<div className="user-profile-side-info-section-wrapper">
					<h2 className="user-profile-side-info-title">Platform</h2>
					<p>{ "platform" in userProfile ? userProfile.platform : "No platform currently selected" }</p>
				</div>
				<div className="user-profile-side-info-section-wrapper">
					<h2 className="user-profile-side-info-title">Genre of Interest</h2>
					<p>{ "genre_of_interest" in userProfile ? userProfile.genre_of_interest : "No genre currently selected"}</p>
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	userProfile: state.userProfile
	
});

export default connect(mapStateToProps)(UserProfileSideInfoSection);