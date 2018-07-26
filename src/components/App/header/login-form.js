import React from 'react';
import './login-form.css';


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
		const username = document.getElementById("searchInput").value;
			fetch("http://localhost:8000/api/login")
				.then(res => {
					console.log(res);
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