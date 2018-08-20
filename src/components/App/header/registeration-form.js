import React from 'react';
import './registeration-form.css';
import { connect } from 'react-redux';
import { loggedInUser } from '../../../actions';

class RegisterationForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		username: "",
		password: "",
		validatePassword: "",
		errorDisplay: false,
		paswordMatchError: false
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

		const username = this.state.username;
		const password = this.state.password;
		const validatePassword = this.state.validatePassword;

		if (password === validatePassword) {
			const user = {
				username: username,
				password: password
			};
			fetch("mongodb://avanichyanukroh:alvin12345@ds227352.mlab.com:27352/warp-zone-api:8000/register", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user)
			})
		  	.then(res => {
		  		console.log(res);
		  		return res.json();
			})
			.then(user => {
				console.log(user);
				this.props.dispatch(loggedInUser(user.username, user));
				console.log(this.props.userProfile);
		  		this.setState({
					username: "",
					password: "",
					validatePassword: ""
				});
				alert("Registeration complete, logging you in now");
			})
			.catch(err => {
				console.log(err);
				this.setState({
					username: "",
					password: "",
					validatePassword: "",
					errorDisplay: true
				});
			});
		}
		else {
			this.setState({passwordMatchError: true})
		};
	};

	render() {

		function renderErrorDisplay() {
			return (
				<p className="username-password-error-text">Username has been used, please try a new username.</p>
				);
		};

		function renderPasswordMatchError() {
			return (
				<p className="username-password-error-text">Validation password does not match, please try again.</p>
				);
		};

		return (

			<div className="registeration-form-container">
			<form className="registeration-form" onSubmit={this.handleSubmit}>
				<h3 className="registeration-form-title">Registeration Form</h3>
				<br/>
				<br/>
				<label>
					Username
					<input
						id="username"
						className="registeration-form-input"
						name="username"
						type="text"
						value={this.state.username}
						onChange={this.handleChange} 
						/>
				</label>
				<label>
					Password
					<input
						id="password"
						className="registeration-form-input"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange} 
						/>
				</label>
				<label>
					Re-enter password
					<input
						id="validatePassword"
						className="registeration-form-input"
						name="validatePassword"
						type="password"
						value={this.state.validatePassword}
						onChange={this.handleChange} 
						/>
						{this.state.passwordMatchError ? renderPasswordMatchError() : null}
				</label>
				{this.state.errorDisplay ? renderErrorDisplay() : null}
				<input className="form-submit-btn" type="submit" value="Submit" />
			</form>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(RegisterationForm);