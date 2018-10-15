import React from 'react';
import '../../float-grid.css';
import './game-profile-main-content-section.css';
import PriceListSection from './price-list-section';
import StorylineSection from './storyline-section';

export default class GameProfileSideContentSection extends React.Component {
	render() {

		return(
			<div className="col-8">
				<div className="grid-separator-container">
					<StorylineSection />
				</div>
				<div className="grid-separator-container">
					<PriceListSection />
				</div>
			</div>
		)
	};
}