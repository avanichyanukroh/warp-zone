import React from 'react';
import '../../float-grid.css';
import "./home.css";

export default function Home(props) {

	return (
		<div className="row home-container">
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