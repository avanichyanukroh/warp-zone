import React from 'react';
import './edit-custom-list-form.css';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../../actions';

class EditCustomListForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		title: this.props.userProfile.custom_list[this.props.modalKey].title,
		content: this.props.userProfile.custom_list[this.props.modalKey].content
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

		const title = this.state.title;
		const content = this.state.content;

		const customList = {
			username: this.props.userProfile.username,
			_id: this.props.userProfile.custom_list[this.props.modalKey]._id,
			title: title,
			content: content
		};

		fetch("https://warp-zone-api.herokuapp.com/editCustomList", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(customList)
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

			<div className="edit-custom-list-form-container">
				<form className="edit-custom-list-form" onSubmit={this.handleSubmit}>
					<h3 className="edit-custom-list-form-title">Edit "{this.state.title}"</h3>
					<br/>
					<br/>
					<label>
						Title
						<input
							id="title"
							className="edit-custom-list-form-input"
							name="title"
							type="text"
							value={this.state.title}
							onChange={this.handleChange} 
							/>
					</label>
					<label>
						Content
						<input
							id="content"
							className="edit-custom-list-form-input"
							name="content"
							type="text"
							value={this.state.content}
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

export default connect(mapStateToProps)(EditCustomListForm);