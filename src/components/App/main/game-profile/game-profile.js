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

		const developersList = gameProfile.developers.map((developer) => <li>{developer}</li>);
		const publishersList = gameProfile.publishers.map((publisher) => <li>{publisher}</li>);
		const gameEnginesList = gameProfile.game_engines.map((gameEngine) => <li>{gameEngine}</li>);
		const playerPerspectivesList = gameProfile.player_perspectives.map((playerPerspective) => <li>{playerPerspective}</li>);
		const gameModesList = gameProfile.game_modes.map((gameMode) => <li>{gameMode}</li>);
		const themesList = gameProfile.themes.map((theme) => <li>{theme}</li>);
		const releaseDatesList = gameProfile.release_dates.map((releaseDate) => <li>{releaseDate.human}</li>);
		const alternativeNamesList = gameProfile.alternative_names.map((alternativeName) => <li>{alternativeName}</li>);
		const websitesList = gameProfile.websites.map((website) => <li>{website}</li>);

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
				<div className="row game-profile-container-2">
					<div className="col-8 main-content-2">
						<div className="main-content-section-container">
							<h3>Storyline</h3>
							<p>gameProfile.storyline goes here, need read more feature</p>
						</div>
					</div>
					<div className="col-4 side-content-2">
						<div className="side-content-section-container">
						<h3>Information</h3>
						<p className="developers-section">Developers: {developersList}</p>
						<p>Publishers: {publishersList}</p>
						<p>Game Engines: {gameEnginesList}</p>
						<p>Game category: {gameProfile.category}</p>
						<p>Player perspective: {playerPerspectivesList}</p>
						<h3>Time to beat</h3>
						<p>Time to beat hastly: {gameProfile.time_to_beat.hastly}</p>
						<p>Time to beat normally: {gameProfile.time_to_beat.normally}</p>
						<p>Time to beat completely: {gameProfile.time_to_beat.completely}</p>
						<p>Game modes: {gameModesList}</p>
						<p>Themes: {themesList}</p>
						<h3>Release dates</h3>
						<p>*releaseDatesList</p>
						<h3>Alternative names</h3>
						<p>*alternativeNamesList</p>
						<p>*gameProfile.esrb</p>
						<p>*gameProfile.pegi</p>
						<h3>Websites</h3>
						<p>*websitesList</p>
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