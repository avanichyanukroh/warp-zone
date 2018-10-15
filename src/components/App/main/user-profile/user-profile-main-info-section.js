import React from 'react';
import '../../float-grid.css';
import "./user-profile-main-info-section.css";
import { connect } from 'react-redux';
import EditUserProfileModal from './edit-user-profile-modal';

class UserProfileMainInfoSection extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		const { userProfile } = this.props;

		return (
			
			<div>
			<EditUserProfileModal />
				<div className="col-8-alt user-profile-main-info-section-container">
					<img src={userProfile.user_portrait} className="profile-portrait" />
					<div className="user-profile-main-info-section-wrapper">
						<h2 className="username-display">{userProfile.username}</h2>
						<p className="user-profile-nickname">{userProfile.nickname}</p>
						<div className="user-profile-main-info-summary">
							<p>{userProfile.user_profile_summary}</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	userProfile: state.userProfile
	
});

export default connect(mapStateToProps)(UserProfileMainInfoSection);