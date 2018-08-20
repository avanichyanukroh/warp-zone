import React from 'react';
import './edit-user-profile-form.css';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../../actions';

class EditUserProfileForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		nickname: this.props.userProfile.nickname,
		platform: this.props.userProfile.platform,
		genreOfInterest: this.props.userProfile.genre_of_interest,
		summary:this.props.userProfile.user_profile_summary,
		userPortrait: this.props.userProfile.user_portrait
	};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {

			const target = event.target;
			const value = target.value;
			const name = target.name;

		this.setState({
			[name]: value
		})
	};



	handleSubmit(event) {
		event.preventDefault();

		const nickname = this.state.nickname;
		const platform = this.state.platform;
		const genreOfInterest = this.state.genreOfInterest;
		const summary = this.state.summary;
		const userPortrait = this.state.userPortrait;

		const userProfile = {
			username: this.props.userProfile.username,
			nickname: nickname,
			platform: platform,
			genre_of_interest: genreOfInterest,
			user_profile_summary: summary,
			user_portrait: userPortrait
		};

		fetch("http://localhost:8000/editUserProfile", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userProfile)
		})
	  	.then(res => {
	  		console.log(res);
	  		return res.json();
		})
		.then(userProfile => {
			this.props.dispatch(updateUserProfile(userProfile));
			window.location.reload();
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {

		return (

			<div className="edit-user-profile-form-container">
				<form className="edit-user-profile-form" onSubmit={this.handleSubmit}>
					<h3 className="edit-user-profile-form-title">Edit your profile</h3>
					<br/>
					<br/>
					<label>
						User portrait URL
						<input
							id="userPortrait"
							className="edit-user-profile-form-input"
							name="userPortrait"
							type="text"
							value={this.state.userPortrait}
							onChange={this.handleChange} 
							/>
					</label>
					<label>
						Nickname
						<input
							id="nickname"
							className="edit-user-profile-form-input"
							name="nickname"
							type="text"
							value={this.state.nickname}
							onChange={this.handleChange} 
							/>
					</label>
					<label>
						Platform
						<input
							id="platform"
							className="edit-user-profile-form-input"
							name="platform"
							type="text"
							value={this.state.platform}
							onChange={this.handleChange} 
							/>
					</label>
					<label>
						Genre of interest
						<input
							id="genreOfInterest"
							className="edit-user-profile-form-input"
							name="genreOfInterest"
							type="text"
							value={this.state.genreOfInterest}
							onChange={this.handleChange} 
							/>
					</label>
					<label>
						Summary
						<input
							id="summary"
							className="edit-user-profile-form-input"
							name="summary"
							type="text"
							value={this.state.summary}
							onChange={this.handleChange} 
							/>
					</label>
					<input className="form-submit-btn" type="submit" value="Submit" />
				</form>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	userProfile: state.userProfile
});

export default connect(mapStateToProps)(EditUserProfileForm);