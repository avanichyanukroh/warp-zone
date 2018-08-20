import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import "./wish-list-section.css";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { selectedGameProfileToRender } from '../../../../actions';
import { genres } from '../../IGDB-id-converter.js';
import { updateUserProfile } from '../../../../actions';

class WishListSection extends React.Component {
	constructor(props) {
		super(props);
		this.watchSelectedGameProfile = this.watchSelectedGameProfile.bind(this);
		this.handleDeleteFromWishlist = this.handleDeleteFromWishlist.bind(this);
	};

	watchSelectedGameProfile(key) {
		if (!(key == null)) {
			let selectedGameProfile = this.props.userProfile.wish_list[`${key}`];
			this.props.dispatch(selectedGameProfileToRender(selectedGameProfile));
		}
	};

	handleDeleteFromWishlist(_id) {
	const idToDelete = {_id: _id, username: this.props.userProfile.username};
	console.log(idToDelete);
	fetch("mongodb://avanichyanukroh:alvin12345@ds227352.mlab.com:27352/warp-zone-api:8000/deleteFromWishList", {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(idToDelete)
	})
  	.then(res => {
  		console.log(res);
  		return res.json();
	})
	.then(userProfile => {
		this.props.dispatch(updateUserProfile(userProfile));
	})
	.catch(err => {
		console.log(err);
	});
};

	render() {
		
		const { userProfile, gameProfile } = this.props;
		let wishListItems = [];

		if (userProfile.wish_list.length > 0) {
			for (let i = 0; i < userProfile.wish_list.length; i++) {
				const releaseDate = new Date(i in userProfile.wish_list ? userProfile.wish_list[i].first_release_date : null);
				const releaseDateString = releaseDate.toString();
				const releaseDateSplit = releaseDateString.split(' ');
				const releaseDateDisplay = releaseDateSplit[1] + ", " + releaseDateSplit[3];

					let genresList = [];
					let genresToMap = "genres" in userProfile.wish_list[i] ? userProfile.wish_list[i].genres : [];
					let mappedGenres = genresToMap.map(genre => {genresList.push(genres[genre])});
					let _id = userProfile.wish_list[i]._id;

				wishListItems.push(
					<li className="wish-list-item row" key={ i in userProfile.wish_list ? i : null }>
						<i className="fas fa-times fa-lg delete-wishlist-icon" onClick={() => this.handleDeleteFromWishlist(_id)}></i>
						<div className="wish-list-game-cover-container col-3-alt">
							<Link
								className="wish-list-link"
								to={`/game-profile/?${userProfile.wish_list[i].name}`}
								key={ i in userProfile.wish_list ? i : null }
								onClick={ () => this.watchSelectedGameProfile( i in userProfile.wish_list ? i : null ) }>
									<img 
								className="wish-list-game-cover"
								src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + userProfile.wish_list[i].cover.cloudinary_id + ".jpg"} />
							</Link>
						</div>
						<div className="wish-list-item-info-container col-9">
								<h3 className="wish-list-game-title">
									<Link
									className="wish-list-link"
									to={`/game-profile/?${userProfile.wish_list[i].name}`}
									key={ i in userProfile.wish_list ? i : null }
									onClick={ () => this.watchSelectedGameProfile( i in userProfile.wish_list ? i : null ) }>
									{userProfile.wish_list[i].name}
									</Link>
								</h3>
							<label className="wishListLabel">Release date:</label><p className="wishListInfo">{releaseDateDisplay}</p>
							<label className="wishListLabel">Genre:</label><p className="wishListInfo">{genresList.join(", ")}</p>
						</div>
					</li>
				);
			};
		};

		return (

		<div className="wish-list-section-container">
			<div className="wish-list-section-title-container">
				<h3>Wish List</h3>
			</div>
			<br/>
			<ul className="wish-list-container">
				{wishListItems}
			</ul>
		</div>
		);
	};
}

const mapStateToProps = state => ({
	userProfile: state.userProfile,
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(WishListSection);