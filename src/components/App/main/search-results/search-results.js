import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { resetRedirect, selectedGameProfileToRender } from '../../../../actions';
import '../../float-grid.css';
import './search-results.css';


export class SearchResults extends React.Component {
		constructor(props) {
		super(props);

		this.state = {
			gameSearchResults: []
		};

		this.resetRedirect = this.resetRedirect.bind(this);
		this.watchSelectedGameProfile = this.watchSelectedGameProfile.bind(this);
	};

	componentDidMount() {
		this.resetRedirect();
	};

	componentDidUpdate() {
		this.resetRedirect();
	};

	resetRedirect() {
		this.props.dispatch(resetRedirect());
	};

	watchSelectedGameProfile(key) {
		if (!(key == null)) {
			let selectedGameProfile = this.props.searchResults[`${key}`];
			console.log(selectedGameProfile);
			this.props.dispatch(selectedGameProfileToRender(selectedGameProfile));
		}
	};

	render() {
		const { searchResults, searchTerm } = this.props;



		let searchResultItems = [];
			if (searchResults.length > 0) {
				for (let i = 0; i < searchResults.length; i++) {

					const releaseDate = new Date(i in searchResults ? searchResults[i].first_release_date : null);
					const releaseDateString = releaseDate.toString();
					const releaseDateSplit = releaseDateString.split(' ');
					const releaseDateDisplay = releaseDateSplit[3];

					let url = i in searchResults ? searchResults[i].cover.cloudinary_id : null;

					searchResultItems.push(
					<li className="search-result-item" key={ i in searchResults ? searchResults[i].id : null }>
						<div className="search-results-img-container">
							<Link
								// id="search-results-link"
								className="search-results-link"
								to="/game-profile"
								key={ i in searchResults ? i : null }
								onClick={ () => this.watchSelectedGameProfile( i in searchResults ? i : null ) }>
									<img className="search-results-img"src={ "//images.igdb.com/igdb/image/upload/t_cover_small/" + url + ".jpg" } />
							</Link>
						</div>
						<div className="search-results-info-container">
							<h3>
								<Link
								className="search-results-link"
								to="/game-profile"
								onClick={ () => this.watchSelectedGameProfile( i in searchResults ? i : null ) }>
									{ i in searchResults ? searchResults[i].name : null }{" (" + releaseDateDisplay + ")"}
								</Link>
							</h3>
							<h3>{ i in searchResults ? searchResults[i].genres : null }</h3>
						</div>
					</li>
						);
				}
			}

		return (

			<div className="search-results-container">
				<div className="row">
				<h2 className="search-results-title"> { 0 in searchResults ? searchResults.length : 0 } results for "{0 in searchResults ? searchTerm : null }"</h2>
					
					<section className="col-12 search-results-section-container">
						<ul>
						{searchResultItems}
						</ul>
					</section>
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(SearchResults);