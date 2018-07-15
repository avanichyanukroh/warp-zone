import React from 'react';
import '../App.css';
import "./landing-page.css";

export default function LandingPage(props) {

	return (
		<div className="row landing-page-container">
			<section className="col-12">
				Featured & recommended
			</section>
			<section className="col-12">
				New releases
			</section>
			<section className="col-12">
				On sale
			</section>
		</div>
		);
}