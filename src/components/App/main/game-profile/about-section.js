import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './about-section.css';

export class AboutSection extends React.Component {

	render() {
		const gameProfile = this.props.gameProfile;

		return(
			<div className="about-section-container">
				<p className="about-info">Genre: something, something</p>
				<p className="about-info">Platform: something, something</p>
				<p className="about-summary">Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release, The Witcher 3: Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new weapons, armor, companion outfits, new game mode and side quests.
</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AboutSection);