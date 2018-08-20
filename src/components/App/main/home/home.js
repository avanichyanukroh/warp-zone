import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { resetRedirect } from '../../../../actions';
import '../../float-grid.css';
import './home.css';
import PopularGamesSlider from './popular-games-slider';
import ComingSoonGamesSlider from './coming-soon-games-slider';
import { platforms } from '../../IGDB-id-converter.js';

export class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			gameSearchResults: [],
			platformToRender: 6,
			platformToRenderTitle: "PC (Microsoft)"
		};

		this.resetRedirect = this.resetRedirect.bind(this);
	};

	componentWillMount() {
		this.resetRedirect();
		const randomNumberGenerator = Math.floor(Math.random() * 5);
		const platformToRenderList = [48, 49, 6, 130, 37];
		this.setState({platformToRender: platformToRenderList[randomNumberGenerator], platformToRenderTitle: platforms[platformToRenderList[randomNumberGenerator]]});
	}

	resetRedirect() {
		this.props.dispatch(resetRedirect());
	}
	
	render() {


		return (
			
			<div className="home-container">
				<div className="row">
				<h2 className="home-greeting-title"> Welcome! Find the right game for the right price here, at Warp Zone.</h2>
					<section className="col-12 home-section-container">
					<h2 className="home-section-title">Popular games right now</h2>
					<PopularGamesSlider />
					<h2 className="coming-soon-section-title">Coming soon for {this.state.platformToRenderTitle}</h2>
					<ComingSoonGamesSlider platform={this.state.platformToRender} />
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