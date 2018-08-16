import React from 'react';
import '../../float-grid.css';
import "./user-profile-side-info-section.css";
import { connect } from 'react-redux';

class UserProfileSideInfoSection extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { userProfile } = this.props;
		return (
			
			<div className="col-4 user-profile-side-info-section-container">
				<i className="fas fa-cog fa-lg"></i>
				<div className="user-profile-side-info-section-wrapper">
					<h2 className="user-profile-side-info-title">Platform</h2>
					<p>{ 0 in userProfile.platform ? userProfile.platform : "No platform currently selected" }</p>
				</div>
				<div className="user-profile-side-info-section-wrapper">
					<h2 className="user-profile-side-info-title">Genre of Interest</h2>
					<p>{ 0 in userProfile.genre_of_interest ? userProfile.genre_of_interest : "No genre currently selected"}</p>
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	userProfile: state.userProfile
	
});

export default connect(mapStateToProps)(UserProfileSideInfoSection);