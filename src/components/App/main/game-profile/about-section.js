import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './about-section.css';

export class AboutSection extends React.Component {

	render() {
		const gameProfile = this.props.gameProfile;
		const shortDescription = gameProfile.summary.slice(0,339) + "...";
		const longDescription = gameProfile.summary;

		function switchAboutSummaryDescription(event) {
			event.preventDefault();
			document.getElementById("about-summary").innerText = longDescription;
			document.getElementById("read-more-about-summary").style.display = "none";
		}

		return(
			<div className="about-section-container">
				<p className="about-info">Genre: {gameProfile.genres}</p>
				<p className="about-info">Platform: {gameProfile.platforms}</p>
				<p 
					className="about-summary"
					id="about-summary">
					{shortDescription}
				</p>
				<span 
					id="read-more-about-summary"
					onClick={switchAboutSummaryDescription}>
					Read more
				</span>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AboutSection);