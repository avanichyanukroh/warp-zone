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
				<p className="about-summary">{gameProfile.summary}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AboutSection);