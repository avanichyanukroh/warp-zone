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

			if (playerRating == null || playerRating == 0) {

				playerRatingRounded = "N/A";
			}
			else {

				playerRatingRounded = Math.round(playerRating);
			}
			if (criticRating == null || playerRating == 0) {

				criticRatingRounded = "N/A";
			}
			else {

				 criticRatingRounded = Math.round(criticRating);
			}
		};

		ratingRounded(gameProfile.rating, gameProfile.aggregated_rating);

		return (

			<div className="col-4 grid-separator-container">
				<div className="side-preview-section-container">
					<img 
						className="game-cover col-12"
						src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + `${ "cover" in gameProfile ? gameProfile.cover.cloudinary_id : null}` + ".jpg"} />
					<div className="side-preview-section-info-container">
						<h2 className="side-preview-section-info-date">{releaseDateDisplay}</h2>
						<p className="side-preview-section-info-text">{ "developers" in gameProfile ? gameProfile.developers.join(", ") : "Unavailable" }</p>
						<p className="side-preview-section-info-text">{ "publishers" in gameProfile ? gameProfile.publishers.join(", ") : "Unavailable" }</p>
					</div>
					<div className="side-preview-section-ratings-display-container">
						<div className="side-preview-section-player-rating-display-container">
							<i className="warp-icon-player-rating fab fa-sith fa-2x"> {playerRatingRounded}%</i>
							<div className="side-preview-section-rating-info">{ "rating_count" in gameProfile ? gameProfile.rating_count : "N/A" } IGDB member ratings</div>
						</div>
						<div className="side-preview-section-critic-rating-display-container">
							<i className="warp-icon-critic-rating fab fa-sith fa-2x"> {criticRatingRounded}%</i>
							<div className="side-preview-section-rating-info">{ "aggregated_rating_count" in gameProfile ? gameProfile.aggregated_rating_count : "N/A" } IGDB critics rating</div>
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