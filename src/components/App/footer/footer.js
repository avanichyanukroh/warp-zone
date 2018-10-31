import React from 'react';
import '../float-grid.css';
import './footer.css';

export default function Footer(props) {

	return (
		<div className="footer-container">
			<footer className="row">
			<div className="col-4 footer-section">
					<p>Site Powered by:</p> 
					<a className="powered-by-links" href="https://www.igdb.com" target="_blank">IGDB.com</a>, 
					<a className="powered-by-links" href="https://www.pricecharting.com" target="_blank"> PriceCharting.com</a>
				</div>
				<div className="col-4 footer-section">

				</div>
				<div className="col-4 footer-section">
					<a className="powered-by-links" href="https://github.com/avanichyanukroh/warp-zone" target="_blank">
						<img className="github-logo" src="http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png" />
						<p className="checkout-github-title">GitHub</p>
					</a>
					
				</div>
			</footer>
		</div>
		);
}