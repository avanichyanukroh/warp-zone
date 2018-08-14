import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './storyline-section.css';

export class StorylineSection extends React.Component {
	constructor(props) {
		super(props);

		this.renderShortDescription = this.renderShortDescription.bind(this);
		this.switchStorylineDescription = this.switchStorylineDescription.bind(this);
	};

	renderShortDescription() {
		let shortDescription;
		let longDescription;

		return ({shortDescription});
	};

	switchStorylineDescription(event) {
		event.preventDefault();
		let longDescription;
		document.getElementById("storyline").innerText = longDescription;
		document.getElementById("read-more-storyline").style.display = "none";
	};

	render() {
		const gameProfile = this.props.gameProfile;
		let shortDescription;
		let longDescription;

		if (!(gameProfile.storyline === "")) {
			shortDescription =  "storyline" in gameProfile && (!(gameProfile.storyline === null)) ? gameProfile.storyline.slice(0,339) + "..." : null;
			longDescription = gameProfile.storyline;
		}

		else {
			shortDescription = "storyline unavailable";
			longDescription = "storyline unavailable";
			}
		
		return(

			<div className="main-content-section-container">
				<h3>Storyline</h3>
				<br/>
				<p id="storyline">{this.renderShortDescription}</p>
				<span 
					id="read-more-storyline"
					onClick={() => this.switchStorylineDescription()}>
					Read more</span>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(StorylineSection);