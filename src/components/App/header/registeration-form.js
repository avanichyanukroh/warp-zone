import React from 'react';
import './registeration-form.css';


export default class RegisterationForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		username: '',
		password: '',
		validatePassword: ''
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

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const validatePassword = document.getElementById("validatePassword").value;

		if (password === validatePassword) {
			console.log("password equals");
			const user = {
				username: username,
				password: password
			};
			fetch("http://localhost:8000/register", {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user)
  				})				
			  	.then(res => {
					console.log(res);
					alert("Registeration complete");
				})
				.catch(err => {
					console.log(err);
				})
		}
		else {
			console.log("password not equals");
			document.getElementById("validationError").style.display = "block";
		}
	}

	render() {

		const validateErrorStyle = {display: "none"};

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
					<div id="validationError" style={validateErrorStyle}>Password does not match, please re-enter password</div>
				</label>
				<input className="form-submit-btn" type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}