import React from 'react';
import '../../float-grid.css';
import './home.css';
import PopularGamesSlider from './popular-games-slider';

export default function Home(props) {

	return (
		<div className="home-container">
			<div className="row">
			<h2 className="home-greeting-title"> Welcome!</h2>
				<section className="col-12 home-section-container">
				<h2 className="home-section-title">Popular games right now</h2>
					<PopularGamesSlider />
				</section>
				<section className="col-12 home-section-container">
				<h2 className="home-section-title">Popular games right now</h2>
					<PopularGamesSlider />
				</section>
				<section className="col-12 home-section-container">
				<h2 className="home-section-title">Popular games right now</h2>
					<PopularGamesSlider />
				</section>
			</div>
		</div>
		);
}