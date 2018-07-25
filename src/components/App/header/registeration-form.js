import React from 'react';
import './registeration-form.css';


export default class RegisterationForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
		}

	render() {
		return (
			<div className="registeration-form-container">
			<form className="registeration-form" onSubmit={this.handleSubmit}>
				<h3>Registeration Form</h3>
				<br/>
				<br/>
				<label>
					Username
					<input
						className="registeration-form-input"
						name="username"
						type="text"
						value={this.state.value}
						onChange={this.handleChange} />
				</label>
				<label>
					Password
					<input
						className="registeration-form-input"
						name="password"
						type="text"
						value={this.state.value}
						onChange={this.handleChange} />
				</label>
				<label>
					Re-enter password
					<input
						className="registeration-form-input"
						name="re-enter password"
						type="text"
						value={this.state.value}
						onChange={this.handleChange} />
				</label>
				<input className="form-submit-btn" type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}