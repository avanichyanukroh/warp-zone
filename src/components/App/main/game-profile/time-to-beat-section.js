import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './time-to-beat-section.css';

export class TimeToBeatSection extends React.Component {
	render() {
		const { gameProfile } = this.props;
		
		return (

			<div className="side-content-section-container">
				<h3>Time to beat</h3>
				<br/>
				<p>Hastly: { "time_to_beat" in gameProfile && !(gameProfile.time_to_beat.hastly === undefined) && !(gameProfile.time_to_beat.hastly === null) ? (gameProfile.time_to_beat.hastly/3600).toFixed(2) + " Hrs" : "N/A" }</p>
				<p>Normally: { "time_to_beat" in gameProfile && !(gameProfile.time_to_beat.normally === undefined) && !(gameProfile.time_to_beat.normally === null) ? (gameProfile.time_to_beat.normally/3600).toFixed(2) + " Hrs" : "N/A" }</p>
				<p>Completely: { "time_to_beat" in gameProfile && !(gameProfile.time_to_beat.completely === undefined) && !(gameProfile.time_to_beat.completely === null) ? (gameProfile.time_to_beat.completely/3600).toFixed(2) + " Hrs" : "N/A" }</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(TimeToBeatSection);