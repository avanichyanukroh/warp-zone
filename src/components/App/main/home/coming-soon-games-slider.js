import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { selectedGameProfileToRender } from '../../../../actions';
import './games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';
import { genres } from '../../IGDB-id-converter.js';

const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
	<div
	  className={className}
	  style={{ ...style, display: "block", transform: "scale(3.0)"}}
	  onClick={onClick}
	/>
  );
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
	<div
	  className={className}
	  style={{ ...style, display: "block", transform: "scale(3.0)"}}
	  onClick={onClick}
	/>
  );
};

class ComingSoonGamesSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			comingSoonGamesItems: []
		};

		this.loadSlider = this.loadSlider.bind(this);
		this.watchSelectedGameProfile = this.watchSelectedGameProfile.bind(this);
	}

	componentDidMount() {
		this.loadSlider();
	};

	loadSlider() {
		const dateToday = new Date();
		const dateTodayConverted = dateToday.getTime();
		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
		const IGDB_URL = "https://api-endpoint.igdb.com//release_dates/?fields=*&filter[platform][eq]=" + this.props.platform + "&order=date:asc&filter[date][gt]=" + dateTodayConverted + "&expand=game";
		fetch(PROXY_URL + IGDB_URL, {
			method: 'GET',
			headers: {
				"user-key": 'a6cd5d421283b0fb00756dbca4e10945',
				"accept": 'application/json'
			}
		})
		.then(res => {return res.json()})
		.then(data => {
			let comingSoonGamesItemsList = [];

			data.map(item => {
				if (!(typeof item.game === "number")) {
					if ("name" in item.game && "cover" in item.game && "genres" in item.game) {
						comingSoonGamesItemsList.push(item.game);
					};
				};
			});
			this.setState({comingSoonGamesItems: comingSoonGamesItemsList});
		})
		.catch(err => {
			console.log(err);
		});
};

	watchSelectedGameProfile(key) {
		if (!(key == null)) {

			let selectedGameProfile = this.state.comingSoonGamesItems[`${key}`];

			let companiesToSearch = [];

			selectedGameProfile.developers.map(developer => companiesToSearch.push(developer));
			selectedGameProfile.publishers.map(publisher => companiesToSearch.push(publisher));

			const joinedCompaniesToSearch = companiesToSearch.join(",");

			const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
			const IGDB_URL = "https://api-endpoint.igdb.com/companies/" + joinedCompaniesToSearch +  "?fields=name";
				
			fetch(PROXY_URL + IGDB_URL, {
				method: 'GET',
				headers: {
					"user-key": '0f9d8cb6b2a5a7df7d5a7449fa3c73a3',
					"accept": 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.then(data => {
				let companyIdConverter = {};
				let developers = [];
				let publishers = [];

				data.map(company => companyIdConverter[company.id] = company.name);
				selectedGameProfile.developers.map(developer => developers.push(companyIdConverter[developer]));
				selectedGameProfile.publishers.map(publisher => publishers.push(companyIdConverter[publisher]));
				selectedGameProfile.developers = developers;
				selectedGameProfile.publishers = publishers;
				console.log(selectedGameProfile);
				this.props.dispatch(selectedGameProfileToRender(selectedGameProfile));
			})
			.catch(err => {
				console.log(err);
			});
		};
	};

	render() {

		const gameProfile = this.props.gameProfile;
		const { comingSoonGamesItems }  = this.state;
		let sliderItems = [];

			for (let i = 0; i < comingSoonGamesItems.length; i++) {

				let url = i in comingSoonGamesItems ? comingSoonGamesItems[i].cover.cloudinary_id : null;
				sliderItems.push(
					<div className="slider-item-container" key={ i in comingSoonGamesItems ? comingSoonGamesItems[i].id : null }>
						<Link
							className="slider-link"
							to="/game-profile"
							key={ i in comingSoonGamesItems ? i : null }
							onClick={ () => this.watchSelectedGameProfile( i in comingSoonGamesItems ? i : null ) }>
							<div className="slider-img-container">
								<img className="slider-img" src={ "//images.igdb.com/igdb/image/upload/t_cover_big/" + url + ".jpg" } />
							</div>
						</Link>
						<div className="slider-item-info-container">
							<Link
									className="slider-link"
									to="/game-profile"
									key={ i in comingSoonGamesItems ? i : null }
									onClick={ () => this.watchSelectedGameProfile( i in comingSoonGamesItems ? i : null ) }>
								<p className="slider-item-title">{ i in comingSoonGamesItems ? comingSoonGamesItems[i].name : null }</p>
							</Link>
							<p>{ i in comingSoonGamesItems ? genres[comingSoonGamesItems[i].genres] : null }</p>
						</div>
					</div>
				);
			}
		

		return (

			<Slider {...settings}>
				{sliderItems}
			</Slider>
		);
	}
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
});

export default connect(mapStateToProps)(ComingSoonGamesSlider);