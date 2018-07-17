import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile.css';
import VideoPlayer from './video-player';
import AboutSection from './about-section';

export class GameProfile extends React.Component {

	render() {
		const gameProfile = this.props.gameProfile;
		const bannerStyle = {
			backgroundImage: 'url(' + '//images.igdb.com/igdb/image/upload/t_screenshot_huge/' + gameProfile.screenshots[0].cloudinary_id + ')'
			};
		const releaseDate = new Date(gameProfile.first_release_date);
		const releaseDateString = releaseDate.toString();
		const releaseDateSplit = releaseDateString.split(' ');
		const releaseDateDisplay = releaseDateSplit[1] + ' ' + releaseDateSplit[2] + ', ' + releaseDateSplit[3];

		return(
			<div>
				<div className="parallax-container">
					<div 
						className="game-profile-banner"
						style={bannerStyle}>
					</div>
				</div>
				<div className="overlap-container">
					<div className="row game-profile-container">
						<h1 className="col-12 game-profile-overlap-name">{gameProfile.name}</h1>
						<div className="col-8 main-content">
							<div className="overlap-main-container">
								<VideoPlayer />
								<AboutSection />
							</div>
						</div>
						<div className="col-4 side-content">
							<div className="overlap-side-container">
								<img 
									className="game-cover col-12"
									src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
								<div className="overlap-side-info-container">
									<h2 className="game-profile-overlap-release-date">{releaseDateDisplay}</h2>
									<h3 className="game-profile-overlap-developer">Developers: {gameProfile.developers}</h3>
								</div>

								<div className="overlap-rating-container">
									<i className="warp-icon-player fab fa-sith fa-3x"> 85%</i>
									<i className="warp-icon-critic fab fa-sith fa-2x"> 85%</i>
								</div>
								<div className="overlap-rating-info-container">
									<div className="overlap-rating-info">IGDB members rating</div>
									<div className="overlap-rating-info"> IGDB critics rating</div>
								</div>
							</div>
						</div>
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