import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './about-section.css';

export class AboutSection extends React.Component {
	constructor(props) {
		super(props);

		this.switchAboutSummaryDescription = this.switchAboutSummaryDescription.bind(this);
		this.renderShortDescription = this.renderShortDescription.bind(this);
	}

	renderShortDescription() {
		let shortDescription;
		let longDescription;

		return ({shortDescription})
	};

	switchAboutSummaryDescription(event) {
		event.preventDefault();
			let longDescription;
		if (!(this.props.gameProfile.summary === "")) {
			document.getElementById("about-summary").innerText = longDescription;
			document.getElementById("read-more-about-summary").style.display = "none";
		}
	};

	render() {
		const gameProfile = this.props.gameProfile;

		if (!(gameProfile.summary === "")) {
			const shortDescription =  gameProfile.summary.slice(0,339) + "...";
			const longDescription = gameProfile.summary;
		}

		else {
			const shortDescription = "Summary unavailable";
			const longDescription = "Summary unavailable";
			}

		return(
			<div className="about-section-container">
				<p className="about-info">Genre: { "genres" in gameProfile ? gameProfile.genres : "Genres unavailable" }</p>
				<p className="about-info">Platform: { "platforms" in gameProfile ? gameProfile.platforms : "Not yet released on a platform" }</p>
				<p 
					className="about-summary"
					id="about-summary">
					{this.renderShortDescription}
				</p>
				<span 
					id="read-more-about-summary"
					onClick={() => this.switchAboutSummaryDescription()}>
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