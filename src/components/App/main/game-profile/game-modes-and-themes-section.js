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

		"game_modes" in gameProfile ? gameProfile.game_modes.map((gameMode) => {
			gameModesList.push(
				game_modes[gameMode]
				);
			}) : null;

		"themes" in gameProfile ? gameProfile.themes.map((theme) => {
			themesList.push(
				themes[theme]
				)
			}) : null;
		
		return (

			<div className="side-content-section-container">
				<label>Game Modes:</label>
				<br/><br/>
				<p>{gameModesList.join(", ")}</p>
				<br/><br/>
				<label>Themes:</label>
				<br/><br/>
				<p>{themesList.join(", ")}</p>
			</div>

		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameModesAndThemesSection);