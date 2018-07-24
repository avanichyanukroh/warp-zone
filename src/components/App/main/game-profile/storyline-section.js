import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './storyline-section.css';

export class StorylineSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const shortDescription = gameProfile.storyline.slice(0,339) + "...";
		const longDescription = gameProfile.storyline;

		function switchStorylineDescription(event) {
			event.preventDefault();
			document.getElementById("storyline").innerText = longDescription;
			document.getElementById("read-more-storyline").style.display = "none";
		}
		
		return(

			<div className="main-content-section-container">
				<h3>Storyline</h3>
				<br/>
				<p id="storyline">{shortDescription}</p>
				<span 
					id="read-more-storyline"
					onClick={switchStorylineDescription}>
					Read more</span>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(StorylineSection);