import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile.css';
import GameProfileMainPreviewSection from './game-profile-main-preview-section';
import GameProfileSidePreviewSection from './game-profile-side-preview-section';
import GameProfileMainContentSection from './game-profile-main-content-section';
import GameProfileSideContentSection from './game-profile-side-content-section';

export class GameProfile extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const bannerStyle = {
			backgroundImage: 'url(' + '//images.igdb.com/igdb/image/upload/t_screenshot_huge/' + gameProfile.screenshots[0].cloudinary_id + ')'
			};

		return(
			<div>
				<div className="parallax-container">
					<div 
						className="game-profile-banner"
						style={bannerStyle}>
					</div>
				</div>
				<div className="game-profile-content-background">
					<div className="row game-profile-preview-container">
						<h1 className="col-12 game-profile-name">{gameProfile.name}</h1>
						<GameProfileMainPreviewSection />
						<GameProfileSidePreviewSection />
					</div>
					<div className="row game-profile-content-container">
						<GameProfileMainContentSection />
						<GameProfileSideContentSection />
					</div>
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfile);