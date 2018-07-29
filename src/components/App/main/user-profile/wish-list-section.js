import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import "./wish-list-section.css";

export class WishListSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const priceList = this.props.priceList;
		const usedPriceToString = priceList["loose-price"].toString();
		const newPriceToString = priceList["new-price"].toString();
		const usedPriceDisplay = "$" + usedPriceToString.slice(0, -2) + "." + usedPriceToString.slice(-2);
		const newPriceDisplay = "$" + newPriceToString.slice(0, -2) + "." + newPriceToString.slice(-2);
		const amazonPriceListLink = "https://www.amazon.com/gp/offer-listing/" + priceList.asin;

		return (

		<div className="wish-list-section-container">
			<div className="wish-list-section-title-container">
				<h3>Wish List</h3>
			</div>
			<br/>
			<ul className="wish-list-container">
				<li className="wish-list-item">
				<div className="wish-list-game-cover-container">
					<img 
						className="wish-list-game-cover"
						src={"//images.igdb.com/igdb/image/upload/t_cover_small/" + gameProfile.cover.cloudinary_id + ".jpg"} />
				</div>
				<div className="wish-list-item-info-container">
					<h4 className="wish-list-game-title">{gameProfile.name}</h4>
					<div className="wish-list-prices-container">
						<p className="wish-list-used-price">Current used price: {usedPriceDisplay}</p>
						<p className="wish-list-new-price">Current new price: {newPriceDisplay}</p>
					</div>
					<div className="wish-list-amazon-price-list-container">
					<a className="wish-list-amazon-price-list" href={amazonPriceListLink}>Current amazon price list</a>
					</div>
				</div>
				</li>
			</ul>
		</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile,
	priceList: state.priceList
})

export default connect(mapStateToProps)(WishListSection);