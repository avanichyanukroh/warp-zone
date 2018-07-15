import React from 'react';
import '../App.css';
import './footer.css';

export default function Footer(props) {

	return (
		<div className="footer-container">
			<footer className="row">
				<div className="col-4">
					Contacts info, Links, navigation/directory
				</div>
				<div className="col-4">
					Terms of service
				</div>
				<div className="col-4">
					Feedbacks, follow us on etc.
				</div>
			</footer>
		</div>
		);
}