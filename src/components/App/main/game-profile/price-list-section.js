import React from 'react';
import {connect} from 'react-redux';
import { priceListToRender } from '../../../../actions';
import '../../float-grid.css';
import './price-list-section.css';

export class PriceListSection extends React.Component {
	constructor(props) {
		super(props);

		this.getGamePriceList = this.getGamePriceList.bind(this);
	};

	componentDidMount() {
		this.getGamePriceList();
	};

	getGamePriceList() {

		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
		const PRICE_CHARTING_URL = "https://www.pricecharting.com/api/products?t=66b5c94722879a1d260216f923ab381f633e1eb4&q=" + this.props.gameProfile.name;
		fetch(PROXY_URL + PRICE_CHARTING_URL, {
			method: 'GET'
		})
		.then(res => {return res.json()})
		.then(data => {
			let gamePriceListExactMatch = [];
			let gamePriceListSimilarMatch = [];
			data.products.map(item => {
				if (item["product-name"] === this.props.gameProfile.name) {
					gamePriceListExactMatch.push(item);
				}
				else {
					gamePriceListSimilarMatch.push(item);
				}
			});
			this.props.dispatch(priceListToRender(gamePriceListExactMatch, gamePriceListSimilarMatch));
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {
		const { gameProfile } = this.props;
		const { priceListExactMatch, priceListSimilarMatch } = this.props;
		let priceListExactMatchToRender = [];
		let priceListSimilarMatchToRender = [];

		if (priceListExactMatch.length > 0) {

			for (let i = 0; i < priceListExactMatch.length; i++) {

				const usedPriceToString = i in priceListExactMatch ? priceListExactMatch[i]["loose-price"].toString() : null;
				const newPriceToString = i in priceListExactMatch ? priceListExactMatch[i]["new-price"].toString() : null;
				const usedPriceDisplay = "$" + usedPriceToString.slice(0, -2) + "." + usedPriceToString.slice(-2);
				const newPriceDisplay = "$" + newPriceToString.slice(0, -2) + "." + newPriceToString.slice(-2);
				const amazonPriceListLink = "https://www.amazon.com/gp/offer-listing/" + priceListExactMatch[i].asin;

				priceListExactMatchToRender.push(
					<div className="price-list-item-container" key={ i in priceListExactMatch ? i : null }>
						<h4 className="price-list-item-title">{priceListExactMatch[i]["product-name"]}</h4>
						<label>Used Price:</label> <p className="price-display">{usedPriceDisplay}</p>
						<label>New Price:</label> <p className="price-display">{newPriceDisplay}</p>
						<label>Amazon Price List:</label> <a className="amazon-links" href={amazonPriceListLink}>Check Amazon</a>
					</div>
				);
			};
		};

		if (priceListSimilarMatch.length > 0) {

			for (let i = 0; i < priceListSimilarMatch.length; i++) {

				const usedPriceToString = (!(priceListSimilarMatch[i]["loose-price"] === undefined)) ? priceListSimilarMatch[i]["loose-price"].toString() : null;
				const newPriceToString = (!(priceListSimilarMatch[i]["new-price"] === undefined)) ? priceListSimilarMatch[i]["new-price"].toString() : null;
				const usedPriceDisplay = (!(usedPriceToString === null)) ? "$" + usedPriceToString.slice(0, -2) + "." + usedPriceToString.slice(-2) : null;
				const newPriceDisplay = (!(newPriceToString === null)) ? "$" + newPriceToString.slice(0, -2) + "." + newPriceToString.slice(-2) : null;
				const amazonPriceListLink = "https://www.amazon.com/gp/offer-listing/" + priceListSimilarMatch[i].asin;

				priceListSimilarMatchToRender.push(
					<div className="price-list-item-container" key={ i in priceListSimilarMatch ? i : null }>
						<h4 className="price-list-item-title">{priceListSimilarMatch[i]["product-name"]}</h4>
						<label>Used Price:</label> <p className="price-display">{usedPriceDisplay}</p>
						<label>New Price:</label> <p className="price-display">{newPriceDisplay}</p>
						<label>Amazon Price List:</label> <a className="amazon-links" href={amazonPriceListLink} target="_blank">Check Amazon</a>
					</div>
				);
			};
		};

		return (

			<div className="price-list-section-container">
				<div className="price-list-exact-section-container">
					<div className="price-list-description-title"><h3>Price List for "{gameProfile.name}"</h3></div>
					<br/>
					{priceListExactMatchToRender.length > 0 ? priceListExactMatchToRender : <p>None available</p>}
				</div>
				<div className="price-list-similar-section-container">
					<div className="price-list-description-title"><h3>Price List similar to "{gameProfile.name}"</h3></div>
					<br/>
					{priceListSimilarMatchToRender.length > 0 ? priceListSimilarMatchToRender : <p>None available</p>}
				</div>
				<br/>
				<p>based on pricecharting.com trend prices</p>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile,
	priceListExactMatch: state.priceListExactMatch,
	priceListSimilarMatch: state.priceListSimilarMatch
})

export default connect(mapStateToProps)(PriceListSection);