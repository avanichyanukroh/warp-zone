import React from 'react';
import './login-form.css';
import { loggedInUser } from '../../../actions';

export default class LoginForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		username: '',
		password: ''
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
		alert("login complete");
		event.preventDefault();
		const loginUsername = document.getElementById("login-username").value;
		const loginPassword = document.getElementById("login-password").value;
		const user = {
			username: loginUsername,
			password: loginPassword
		};
			fetch("http://localhost:8000/api/login", {
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
				this.props.dispatch(loggedInUser(data.user.username));
			})
				.catch(err => {
					console.log(err);
				})
		}

	render() {
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
						type="text"
						value={this.state.password}
						onChange={this.handleChange} 
						/>
				</label>
				<input className="form-submit-btn" type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}