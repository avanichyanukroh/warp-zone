import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './release-dates-section.css';

export class ReleaseDatesSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const releaseDatesList = gameProfile.release_dates.map((releaseDate) => <li>{releaseDate.human} - {releaseDate.platform}</li>);
		
		return(

			<div className="side-content-section-container">
				<label>Release Dates: </label>
				<br/><br/>
				<p>{releaseDatesList}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(ReleaseDatesSection);