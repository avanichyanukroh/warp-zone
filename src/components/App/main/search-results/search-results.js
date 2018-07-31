import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './search-results.css';


export class SearchResults extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;


		return(
			<div>

			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(SearchResults);