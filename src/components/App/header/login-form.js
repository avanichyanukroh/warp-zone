import React from 'react';
import './login-form.css';
import { connect } from 'react-redux';
import { loggedInUser } from '../../../actions';

class LoginForm extends React.Component {
	constructor(props) {
	super(props);

	this.state = {
		username: "",
		password: "",
		errorDisplay: false
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
		const loginUsername = this.state.username;
		const loginPassword = this.state.password;
		const user = {
			username: loginUsername,
			password: loginPassword
		};
			fetch("http://localhost:8000/login", {
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
				.then(data => {
					console.log(data);
					this.props.dispatch(loggedInUser(data.user.username, data.user));
					this.setState({
						username: "",
						password: "",
					});
			})
				.catch(err => {
					console.log(err);
					this.setState({
						username: "",
						password: "",
						errorDisplay: true
					});
				});
		};

	render() {

		function renderErrorDisplay() {
			return (
					<p className="username-password-error-text">Username and password was invalid, please try again.</p>
				);
		};

		return (

			<div className="login-form-container">
			<form className="login-form" onSubmit={this.handleSubmit}>
				<h3 className="login-form-title">Login Form</h3>
				<br/>
				<br/>
				<label>
					Username
					<input
						id="login-username"
						className="login-form-input"
						name="username"
						type="text"
						value={this.state.username}
						onChange={this.handleChange} 
						/>
				</label>
				<label>
					Password
					<input
						id="login-password"
						className="login-form-input"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange} 
						/>
				</label>
				{this.state.errorDisplay ? renderErrorDisplay() : null}
				<input className="form-submit-btn" type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(LoginForm);