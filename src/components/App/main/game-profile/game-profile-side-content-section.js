import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile-side-content-section.css';
import InformationSection from './information-section';
import GameModesAndThemesSection from './game-modes-and-themes-section';
import ReleaseDatesSection from './release-dates-section';
import AlternativeNamesSection from './alternative-names-section';
import AgeRatingSection from './age-rating-section';
import WebsitesSection from './websites-section';
import TimeToBeatSection from './time-to-beat-section';

export class GameProfileSidePreviewSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		
		return(

			<div className="col-4">
				<div className="grid-separator-container">
					<InformationSection />
				</div>
				<div className="grid-separator-container">
					<GameModesAndThemesSection />
				</div>
				<div className="grid-separator-container">
					<ReleaseDatesSection />
				</div>
				<div className="grid-separator-container">
					<AlternativeNamesSection />
				</div>
				<div className="grid-separator-container">
					<AgeRatingSection />
				</div>
				<div className="grid-separator-container">
					<WebsitesSection />
				</div>
				<div className="grid-separator-container">
					<TimeToBeatSection />
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfileSidePreviewSection);