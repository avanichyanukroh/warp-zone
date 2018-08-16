import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './age-rating-section.css';
import { esrb, pegi } from '../../IGDB-id-converter.js';

export class AgeRatingSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		
		return(

			<div className="side-content-section-container">
				<h3>Age Rating</h3>
				<br/><br/>
				<img className="esrb-img" src={"esrb" in gameProfile ? esrb[gameProfile.esrb.rating] : null} />
				<img className="pegi-img" src={"pegi" in gameProfile ? pegi[gameProfile.pegi.rating] : null} />
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AgeRatingSection);