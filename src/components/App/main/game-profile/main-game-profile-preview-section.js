import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './main-game-profile-preview-section.css';
import VideoPlayer from './video-player';
import AboutSection from './about-section';

export class MainGameProfilePreviewSection extends React.Component {
	render() {

		return(
			<div className="col-8 grid-separator-container">
				<div className="main-preview-section-container">
					<VideoPlayer />
					<AboutSection />
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(MainGameProfilePreviewSection);