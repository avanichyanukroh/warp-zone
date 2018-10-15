import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './information-section.css';
import { game_modes, themes, player_perspectives  } from '../../IGDB-id-converter.js';

class InformationSection extends React.Component {
	render() {
		
		const { gameProfile } = this.props;
		const developersList = "developers" in gameProfile && (!(gameProfile.developers === null)) ? gameProfile.developers.join(", ") : null;
		const publishersList = "publishers" in gameProfile && (!(gameProfile.publishers === null)) ? gameProfile.publishers.join(", ") : null;
		const playerPerspectivesList = "player_perspectives" in gameProfile && (!(gameProfile.player_perspectives === null)) ? gameProfile.player_perspectives.map((playerPerspective) => <li key={playerPerspective}>{player_perspectives[playerPerspective]}</li>) : null;
		
		return (

			<div className="side-content-section-container">
				<label>Title:</label>
				<br/><br/>
				 <p>{ !(gameProfile.name == "") ? gameProfile.name : "Untitled"}</p>
				 <br/><br/>
				<label>Developers:</label>
				<br/><br/>
				<p>{developersList}</p>
				<br/><br/>
				<label>Publishers:</label>
				<br/><br/>
				<p>{publishersList}</p>
				<br/><br/>
				<label>Player perspective:</label>
				<br/><br/>
				<p>{playerPerspectivesList}</p>
			</div>

		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(InformationSection);