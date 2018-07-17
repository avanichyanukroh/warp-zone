import React from 'react';
import '../float-grid.css';
import './footer.css';

export default function Footer(props) {

	return (
		<div className="footer-container">
			<footer className="row">
				<div className="col-4 footer-section">
					Contacts info, Links, navigation/directory
				</div>
				<div className="col-4 footer-section">
					Terms of service
				</div>
				<div className="col-4 footer-section">
					Feedbacks, follow us on etc.
				</div>
			</footer>
		</div>
		);
}