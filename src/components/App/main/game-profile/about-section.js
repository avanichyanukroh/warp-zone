import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './about-section.css';
import { updateUserProfile } from '../../../../actions';
import { genres, platforms  } from '../../IGDB-id-converter.js';

export class AboutSection extends React.Component {
	constructor(props) {
		super(props);

		this.switchAboutSummaryDescription = this.switchAboutSummaryDescription.bind(this);
		this.renderShortDescription = this.renderShortDescription.bind(this);
		this.handleAddToWishlist = this.handleAddToWishlist.bind(this);
	}

	renderShortDescription() {
		let shortDescription;

		if ("summary" in this.props.gameProfile && (!(this.props.gameProfile.summary == ""))) {
			shortDescription =  this.props.gameProfile.summary.slice(0,339) + "...";
		}
		else {
			shortDescription = "Summary unavailable";
		};
		return (<span>{shortDescription}</span>)
	};

	switchAboutSummaryDescription() {
		let longDescription;

		if ("summary" in this.props.gameProfile && (!(this.props.gameProfile.summary == ""))) {
			longDescription = this.props.gameProfile.summary;
		}
		else {
			longDescription = "Summary unavailable";
		};

		document.getElementById("about-summary").innerText = longDescription;
		document.getElementById("read-more-about-summary").style.display = "none";
	};

	handleAddToWishlist() {
		const { gameProfile } = this.props;
		gameProfile.username = this.props.userProfile.username;
		console.log(gameProfile);
		fetch("https://warp-zone-api.herokuapp.com/addToWishlist", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(gameProfile)
		})
	  	.then(res => {
	  		console.log(res);
	  		return res.json();
		})
		.then(userProfile => {
			console.log(userProfile);
			this.props.dispatch(updateUserProfile(userProfile));
			document.getElementById("add-game-to-wishlist-btn").style.display = "none";
			document.getElementById("add-game-to-wishlist-feedback").style.display = "block";
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {
		const { gameProfile, loggedInUser } = this.props;

		let genresList = [];

		"genres" in gameProfile && !(gameProfile.genres === null) && !(gameProfile.genres === undefined) ? 
		gameProfile.genres.map(genre => genresList.push(genres[genre]))
		: "Genres unavailable";

		let platformsList = [];

		"platforms" in gameProfile && !(gameProfile.platforms === null) && !(gameProfile.platforms === undefined) ?
		gameProfile.platforms.map(platform => platformsList.push(platforms[platform]))
		: "Not yet released on a platform";

		if ("summary" in gameProfile) {
			const shortDescription =  gameProfile.summary.slice(0,339) + "...";
			const longDescription = gameProfile.summary;
		}

		else {
			const shortDescription = "Summary unavailable";
			const longDescription = "Summary unavailable";
			}

		if (!(loggedInUser === undefined)) {

			return (

				<div className="about-section-container">
					<button className="add-game-to-wishlist-btn" id="add-game-to-wishlist-btn" onClick={() => {this.handleAddToWishlist()}}><h2 className="addition-text">+</h2> to wishlist</button>
					<div id="add-game-to-wishlist-feedback">Added to wishlist</div>
					<div>
						<label className="about-info-label">Genre:</label><p className="about-info"> {genresList.join(", ")}</p>
					</div>
					<div>
						<label className="about-info-label">Platform:</label><p className="about-info"> {platformsList.join(", ")}</p>
					</div>
					<p 
						className="about-summary"
						id="about-summary">
						{this.renderShortDescription()}
					</p>
					<span 
						id="read-more-about-summary"
						onClick={() => this.switchAboutSummaryDescription()}>
						Read more
					</span>
				</div>
			);
		}
		else {

			return (

				<div className="about-section-container">
					<button className="add-game-to-wishlist-btn" onClick={() => {alert("Please sign in to add game to wishlist.")}}><h2 className="addition-text">+</h2> to wishlist</button>
					<p className="about-info">Genre: {genresList.join(", ")}</p>
					<p className="about-info">Platform: {platformsList.join(", ")}</p>
					<p 
						className="about-summary"
						id="about-summary">
						{this.renderShortDescription()}
					</p>
					<span 
						id="read-more-about-summary"
						onClick={() => this.switchAboutSummaryDescription()}>
						Read more
					</span>
				</div>
			);
		}
	};
}

const mapStateToProps = state => ({
	loggedInUser: state.loggedInUser,
	userProfile: state.userProfile,
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(AboutSection);