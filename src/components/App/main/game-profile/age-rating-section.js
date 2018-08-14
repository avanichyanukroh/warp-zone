import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './age-rating-section.css';

export class AgeRatingSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		
		return(

			<div className="side-content-section-container">
				<h3>Age Rating</h3>
				<br/><br/>
				<span>{"esrb" in gameProfile ? gameProfile.esrb.rating : null}</span>
				<span>{"pegi" in gameProfile ? gameProfile.pegi.rating: null}</span>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AgeRatingSection);