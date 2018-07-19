import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './side-game-profile-content-section.css';

export class SideGameProfilePreviewSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const developersList = gameProfile.developers.map((developer) => <li>{developer}</li>);
		const publishersList = gameProfile.publishers.map((publisher) => <li>{publisher}</li>);
		const gameEnginesList = gameProfile.game_engines.map((gameEngine) => <li>{gameEngine}</li>);
		const playerPerspectivesList = gameProfile.player_perspectives.map((playerPerspective) => <li>{playerPerspective}</li>);
		const gameModesList = gameProfile.game_modes.map((gameMode) => <li>{gameMode}</li>);
		const themesList = gameProfile.themes.map((theme) => <li>{theme}</li>);

		const releaseDatesList = gameProfile.release_dates.map((releaseDate) => <li>{releaseDate.human} - {releaseDate.platform}</li>);

		const alternativeNamesList = gameProfile.alternative_names.map((alternativeName) => <li>{alternativeName.name}</li>);
		const websitesList = gameProfile.websites.map((website) => <li>{website.category} - {website.url}</li>);
		
		return(
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
				<p>{releaseDatesList}</p>
				<h3>Alternative names</h3>
				<p>{alternativeNamesList}</p>
				<p>{gameProfile.esrb.rating}</p>
				<p>{gameProfile.pegi.rating}</p>
				<h3>Websites</h3>
				<p>{websitesList}</p>
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(SideGameProfilePreviewSection);