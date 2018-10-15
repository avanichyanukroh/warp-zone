import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './alternative-names-section.css';

export class AlternativeNamesSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		let alternativeNamesList = []; 
		"alternative_names" in gameProfile ? gameProfile.alternative_names.map((alternativeName) => alternativeNamesList.push(alternativeName.name)) : "No alternative names";
		
		return(

			<div className="side-content-section-container">
				<label>Alternative Names:</label>
				<br/><br/>
				<p>{alternativeNamesList.join(", ")}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AlternativeNamesSection);