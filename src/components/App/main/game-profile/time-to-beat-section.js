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
				<p>Hastly: {gameProfile.time_to_beat.hastly}</p>
				<p>Beat normally: {gameProfile.time_to_beat.normally}</p>
				<p>Completely: {gameProfile.time_to_beat.completely}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(TimeToBeatSection);