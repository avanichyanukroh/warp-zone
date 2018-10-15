import React from 'react';
import ReactModal from 'react-modal';
import './edit-custom-list-modal.css';
import EditCustomListForm from './edit-custom-list-form';


export default class EditCustomListModal extends React.Component {
	constructor () {
		super();

		this.state = {
			showModal: false
		};
	
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	};
	
	handleOpenModal () {
		this.setState({ showModal: true });
	};
	
	handleCloseModal () {
		this.setState({ showModal: false });
	};
	
	componentWillMount() {
		ReactModal.setAppElement('body');
	};

	render () {

	return (

		<div>
			<i className="fas fa-cog fa-lg" onClick={this.handleOpenModal}></i>
			<ReactModal 
				className="modal"
				overlayClassName="overlay-modal"
				isOpen={this.state.showModal}
				contentLabel="Sign up"
				onRequestClose={this.handleCloseModal}>
				<div className="close-modal-wrapper">
					<i className="fas fa-times fa-lg exit-modal-icon" onClick={this.handleCloseModal}></i>
				</div>
				<EditCustomListForm modalKey={ this.props.modalKey } />
			</ReactModal>
		</div>
	);
	};
};