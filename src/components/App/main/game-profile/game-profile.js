import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile.css';
import GameProfileMainPreviewSection from './game-profile-main-preview-section';
import GameProfileSidePreviewSection from './game-profile-side-preview-section';
import GameProfileMainContentSection from './game-profile-main-content-section';
import GameProfileSideContentSection from './game-profile-side-content-section';

import { clearGameProfile } from '../../../../actions';

export class GameProfile extends React.Component {

	componentWillUnmount() {
		this.props.dispatch(clearGameProfile());
	}

	render() {
		const gameProfile = this.props.gameProfile;
		const bannerStyle = {
			backgroundImage: 'url(' + 'https://images.igdb.com/igdb/image/upload/t_screenshot_huge/' + `${"screenshots" in gameProfile ? gameProfile.screenshots[0].cloudinary_id : null}` + '.jpg)'
			};
		if (gameProfile.name === "") {
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
							<h1 className="col-12 game-profile-name">Sorry! Information on this game is currently unavailable.</h1>
						</div>
						<div className="row game-profile-content-container">
							<div className="filler-container"></div>
						</div>
					</div>
				</div>
			);
		}
		else {
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
							<h1 className="col-12 game-profile-name">{ "name" in gameProfile ? gameProfile.name : "Unititled" }</h1>
							<GameProfileSidePreviewSection />
							<GameProfileMainPreviewSection />

						</div>
						<div className="row game-profile-content-container">
							<GameProfileSideContentSection />
							<GameProfileMainContentSection />
						</div>
					</div>
				</div>
			);
		}
		
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfile);