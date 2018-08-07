import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './time-to-beat-section.css';

export class TimeToBeatSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		
		return(

			<div className="side-content-section-container">
				<h3>Time to beat</h3>
				<br/><br/>
				<p>Hastly: { "time_to_beat" in gameProfile ? gameProfile.time_to_beat.hastly : null }</p>
				<p>Beat normally: { "time_to_beat" in gameProfile ? gameProfile.time_to_beat.normally : null }</p>
				<p>Completely: { "time_to_beat" in gameProfile ? gameProfile.time_to_beat.completely : null }</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(TimeToBeatSection);