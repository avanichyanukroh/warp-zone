import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './release-dates-section.css';
import { platforms } from '../../IGDB-id-converter.js';

let keyCount = 0;

export class ReleaseDatesSection extends React.Component {
	render() {

		const gameProfile = this.props.gameProfile;
		let releaseDatesList = [];
		const releaseDates = gameProfile.release_dates.map((releaseDate) => {
			let splitReleaseDate = releaseDate.human.split('-');
			let reformattedReleaseDate = splitReleaseDate[1] + " " + splitReleaseDate[2] + ", " + splitReleaseDate[0];

			releaseDatesList.push(
				<li key={keyCount ++}>{reformattedReleaseDate} - {platforms[releaseDate.platform]}</li>
			);
		});
		
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