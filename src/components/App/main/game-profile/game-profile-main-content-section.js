import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile-main-content-section.css';
import PriceListSection from './price-list-section';
import StorylineSection from './storyline-section';

export class GameProfileSideContentSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;

		return(
			<div className="col-8">
				<div className="grid-separator-container">
					<PriceListSection />
				</div>
				<div className="grid-separator-container">
					<StorylineSection />
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfileSideContentSection);