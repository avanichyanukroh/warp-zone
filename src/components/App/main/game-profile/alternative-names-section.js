import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './alternative-names-section.css';

export class AlternativeNamesSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const alternativeNamesList = "alternative_names" in gameProfile ? gameProfile.alternative_names.map((alternativeName) => <li>{alternativeName.name}</li>) : null;
		
		return(

			<div className="side-content-section-container">
				<label>Alternative Names:</label>
				<br/><br/>
				<p>{alternativeNamesList}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AlternativeNamesSection);