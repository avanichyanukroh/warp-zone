import React from 'react';
import ReactModal from 'react-modal';
import './sign-up-and-login-modal.css';
import RegisterationForm from './registeration-form';
import LoginForm from './login-form';

export default class SignUpAndLogInModal extends React.Component {
	constructor () {
		super();
		this.state = {
			showModal: false,
			showModal2: false
		};
	
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleOpenModal2 = this.handleOpenModal2.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleCloseModal2 = this.handleCloseModal2.bind(this);
	};
	
	handleOpenModal () {
		this.setState({ showModal: true });
	};
	
	handleOpenModal2 () {
		this.setState({ showModal2: true });
	};
	
	handleCloseModal () {
		this.setState({ showModal: false });
	};
	
	handleCloseModal2 () {
		this.setState({ showModal2: false });
	};

	componentWillMount() {
		ReactModal.setAppElement('body');
	};
	
	render () {

		return (

			<div>
				<button onClick={this.handleOpenModal} className="signup-login-btn">Sign up</button>
				<button onClick={this.handleOpenModal2} className="signup-login-btn">Log in</button>
				<ReactModal 
					className="modal"
					overlayClassName="overlay-modal"
					isOpen={this.state.showModal}
					contentLabel="Sign up"
					onRequestClose={this.handleCloseModal}>
					<div className="close-modal-wrapper">
						<i className="fas fa-times fa-lg exit-modal-icon" onClick={this.handleCloseModal}></i>
					</div>
					<RegisterationForm />
				</ReactModal>
				<ReactModal 
					className="modal"
					overlayClassName="overlay-modal"
					isOpen={this.state.showModal2}
					contentLabel="Log in"
					onRequestClose={this.handleCloseModal2}>
					<div className="close-modal-wrapper">
				 		<i className="fas fa-times fa-lg exit-modal-icon" onClick={this.handleCloseModal2}></i>
				 	</div>
				 	<LoginForm />
				</ReactModal>
			</div>
		);
	};
};