import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './search-results.css';


export class SearchResults extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;

		return(

			<div className="search-results-container">
				<div className="row">
				<h2 className="search-results-title"> # of results for ""</h2>
					<section className="col-12 search-results-section-container">
					
					</section>
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(SearchResults);