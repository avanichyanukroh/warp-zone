import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-modes-and-themes-section.css';

export class GameModesAndThemesSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const gameModesList = gameProfile.game_modes.map((gameMode) => <li key={gameMode}>{gameMode}</li>);
		const themesList = gameProfile.themes.map((theme) => <li key={theme}>{theme}</li>);
		
		return(

			<div className="side-content-section-container">
				<label>Game Modes:</label>
				<br/><br/>
				<p>{gameModesList}</p>
				<br/>
				<label>Themes:</label>
				<br/><br/>
				<p>{themesList}</p>
			</div>

		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameModesAndThemesSection);