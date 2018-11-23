import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { getSelectedGameProfile } from '../../../../actions';
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

class PopularGamesSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			popularGamesItems: []
		};

		this.loadSlider = this.loadSlider.bind(this);
		this.watchSelectedGameProfile = this.watchSelectedGameProfile.bind(this);
	}

	componentDidMount() {
		this.loadSlider();
	};

	loadSlider() {
		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
		const IGDB_URL = "https://api-endpoint.igdb.com/games/?fields=id,name,url,summary,storyline,collection,rating,popularity,total_rating,total_rating_count,rating_count,developers,publishers,game_engines,category,time_to_beat,player_perspectives,game_modes,themes,genres,first_release_date,platforms,release_dates,alternative_names,screenshots,videos,cover,esrb,pegi,websites&order=popularity:desc";
		fetch(PROXY_URL + IGDB_URL, {
			method: 'GET',
			headers: {
				"user-key": 'a6cd5d421283b0fb00756dbca4e10945',
				"accept": 'application/json'
			}
		})
		.then(res => {return res.json()})
		.then(data => {
			let popularGamesItemsList = [];

			data.map(item => {
				if ("name" in item && "cover" in item && "genres" in item) {
					popularGamesItemsList.push(item);
				}
			});
			this.setState({popularGamesItems: popularGamesItemsList});
			console.log(this.state.popularGamesItems[0]);
			console.log(this.state.popularGamesItems[1])
		})
		.catch(err => {
			console.log(err);
		});
};

	watchSelectedGameProfile(key) {
		console.log("key is", key);
		if (!(key == null)) {
			let selectedGameProfile = this.state.popularGamesItems[`${key}`];
			this.props.dispatch(getSelectedGameProfile(selectedGameProfile));
		};
	};

	render() {

		const gameProfile = this.props.gameProfile;
		const { popularGamesItems }  = this.state;
		let sliderItems = [];

			for (let i = 0; i < popularGamesItems.length; i++) {

				let url = i in popularGamesItems ? popularGamesItems[i].cover.cloudinary_id : null;
				sliderItems.push(
					<div className="slider-item-container" key={ i in popularGamesItems ? popularGamesItems[i].id : null }>
						<Link
							className="slider-link"
							to="/game-profile"
							key={ i in popularGamesItems ? i : null }
							onClick={ () => this.watchSelectedGameProfile( i in popularGamesItems ? i : null ) }>
							<div className="slider-img-container">
								<img className="slider-img" src={ "//images.igdb.com/igdb/image/upload/t_cover_big/" + url + ".jpg" } />
							</div>
						</Link>
						<div className="slider-item-info-container">
							<Link
									className="slider-link"
									to="/game-profile"
									key={ i in popularGamesItems ? i : null }
									onClick={ () => this.watchSelectedGameProfile( i in popularGamesItems ? i : null ) }>
								<p className="slider-item-title">{ i in popularGamesItems ? popularGamesItems[i].name : null }</p>
							</Link>
							<p className="slider-genre-display">{ i in popularGamesItems ? genres[popularGamesItems[i].genres] : null }</p>
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

export default connect(mapStateToProps)(PopularGamesSlider);