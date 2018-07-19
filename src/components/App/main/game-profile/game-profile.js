import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile.css';
import MainGameProfilePreviewSection from './main-game-profile-preview-section';
import SideGameProfilePreviewSection from './side-game-profile-preview-section';
import MainGameProfileContentSection from './main-game-profile-content-section';
import SideGameProfileContentSection from './side-game-profile-content-section';

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
					<div className="row game-profile-preview-container">
						<h1 className="col-12 game-profile-name">{gameProfile.name}</h1>
						<MainGameProfilePreviewSection />
						<SideGameProfilePreviewSection />
					</div>
				<div className="row game-profile-container">
					<MainGameProfileContentSection />
					<SideGameProfileContentSection />
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfile);