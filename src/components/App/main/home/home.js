import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { resetRedirect } from '../../../../actions';
import '../../float-grid.css';
import './home.css';
import PopularGamesSlider from './popular-games-slider';

export class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			gameSearchResults: []
		};

		this.resetRedirect = this.resetRedirect.bind(this);
	};

	componentWillMount() {
		this.resetRedirect();
	}

	resetRedirect() {
		this.props.dispatch(resetRedirect());
	}
	
	render() {

		return (
			
			<div className="home-container">
				<div className="row">
				<h2 className="home-greeting-title"> Welcome!</h2>
					<section className="col-12 home-section-container">
					<h2 className="home-section-title">Popular games right now</h2>

					</section>
				</div>
			</div>
			);
		}
}

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(Home);