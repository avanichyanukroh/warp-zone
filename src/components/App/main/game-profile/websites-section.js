import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './websites-section.css';

export class WebsitesSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const websitesList = gameProfile.websites.map((website) => <li>{website.category} - {website.url}</li>);
		
		return(

			<div className="side-content-section-container">
				<h3>Websites</h3>
				<br/><br/>
				<p>{websitesList}</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(WebsitesSection);