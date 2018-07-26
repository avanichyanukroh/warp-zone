import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './price-list-section.css';

export class PriceListSection extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;
		const priceList = this.props.priceList;
		const usedPriceToString = priceList["loose-price"].toString();
		const newPriceToString = priceList["new-price"].toString();
		const usedPriceDisplay = "$" + usedPriceToString.slice(0, -2) + "." + usedPriceToString.slice(-2);
		const newPriceDisplay = "$" + newPriceToString.slice(0, -2) + "." + newPriceToString.slice(-2);
		const amazonPriceListLink = "https://www.amazon.com/gp/offer-listing/" + priceList.asin;

		return(

			<div className="main-content-section-container">
				<h3>Price List</h3>
				<br/>
				<p>based on pricecharting.com trend prices</p>
				<br/>
				<label>Used Price:</label> {usedPriceDisplay}
				<br/><br/>
				<label>New Price:</label> {newPriceDisplay}
				<br/><br/>
				<label>Amazon Price List:</label> {amazonPriceListLink}
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile,
	priceList: state.priceList
})

export default connect(mapStateToProps)(PriceListSection);