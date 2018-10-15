import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './websites-section.css';
import { website_category } from '../../IGDB-id-converter.js';

let keyCount = 0;

export class WebsitesSection extends React.Component {
	render() {
		const { gameProfile } = this.props;
		const websitesList = "websites" in gameProfile && (!(gameProfile.websites === null)) ? gameProfile.websites.map((website) => <a className="website-links" href={website.url} target="_blank" key={keyCount ++}>{website_category[website.category]}</a>) : null;
		
		return(

			<div className="side-content-section-container">
				<h3>Websites</h3>
				<br/>
				<div className="website-links-container">{websitesList}</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(WebsitesSection);