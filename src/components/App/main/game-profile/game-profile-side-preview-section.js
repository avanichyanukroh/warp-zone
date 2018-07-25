import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './game-profile-side-preview-section.css';

export class GameProfileSidePreviewSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const releaseDate = new Date(gameProfile.first_release_date);
		const releaseDateString = releaseDate.toString();
		const releaseDateSplit = releaseDateString.split(' ');
		const releaseDateDisplay = releaseDateSplit[1] + ' ' + releaseDateSplit[2] + ', ' + releaseDateSplit[3];
		let playerRatingRounded;
		let criticRatingRounded;

		function ratingRounded(playerRating, criticRating) {

			if (playerRating == null) {

				playerRatingRounded = "N/A";
			}
			else {

				playerRatingRounded = Math.round(playerRating);
			}
			if (criticRating == null) {

				criticRatingRounded = "N/A";
			}
			else {

				 criticRatingRounded = Math.round(criticRating);
			}
		};

		ratingRounded(gameProfile.rating, gameProfile.aggregated_rating);

		return(
			<div className="col-4 grid-separator-container">
				<div className="side-preview-section-container">
					<img 
						className="game-cover col-12"
						src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="side-preview-section-info-container">
						<h2 className="side-preview-section-info-date">{releaseDateDisplay}</h2>
						<h3 className="side-preview-section-info-text">Developers: {gameProfile.developers}</h3>
						<h3 className="side-preview-section-info-text">Publishers: {gameProfile.publishers}</h3>
					</div>
					<div className="side-preview-section-ratings-display-container">
						<div className="side-preview-section-player-rating-display-container">
							<i className="warp-icon-player-rating fab fa-sith fa-2x"> {playerRatingRounded}%</i>
							<div className="side-preview-section-rating-info">Based on {gameProfile.rating_count} IGDB member ratings</div>
						</div>
						<div className="side-preview-section-critic-rating-display-container">
							<i className="warp-icon-critic-rating fab fa-sith fa-2x"> {criticRatingRounded}%</i>
							<div className="side-preview-section-rating-info">Based on {gameProfile.aggregated_rating_count} IGDB critics rating</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(GameProfileSidePreviewSection);