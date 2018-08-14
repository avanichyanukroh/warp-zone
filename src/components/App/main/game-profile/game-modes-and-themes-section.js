import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-modes-and-themes-section.css';
import { game_modes, themes } from '../../IGDB-id-converter.js';

class GameModesAndThemesSection extends React.Component {
	render() {
		const { gameProfile } = this.props;
		const gameModesList = [];
		const themesList = [];

		const convertGameModesList = "game_modes" in gameProfile ? gameProfile.game_modes.map((gameMode) => {
			gameModesList.push(
				<li key={gameMode}>{game_modes[gameMode]}</li>
				);
			}) : null;

		const convertThemesList = "themes" in gameProfile ? gameProfile.themes.map((theme) => {
			themesList.push(
				<li key={theme}>{themes[theme]}</li>
				)
			}) : null;
		
		return (

			<div className="side-content-section-container">
				<label>Game Modes:</label>
				<br/><br/>
				{gameModesList}
				<br/><br/>
				<label>Themes:</label>
				<br/><br/>
				{themesList}
			</div>

		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameModesAndThemesSection);