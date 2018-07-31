import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux';
import './popular-games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

function getPopularGamesList() {
	const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
	const IGDB_URL = "https://api-endpoint.igdb.com/games/?fields=name,popularity&order=popularity:desc";
	fetch(PROXY_URL + IGDB_URL, {
		method: 'GET',
		headers: {
			"user-key": '15870042b514b393825fc09f6b04056b',
			"accept": 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		let popularGamesList = data;
		console.log(popularGamesList);
		let popularGamesIdList = popularGamesList.map((item) => {
		let	popularGamesId = item.id;
			return popularGamesId;
		});
		console.log(popularGamesIdList);
		let renderPopularGamesSlide = popularGamesSlides(popularGamesIdList);
		console.log(renderPopularGamesSlide);
	})
	.catch(err => {
		console.log(err);
	});
};

function popularGamesSlides(popularGamesIdList) {
	const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
	let popularGamesRenderList = [];
	for (let i = 0; i < popularGamesIdList.length; i ++) {
		const IGDB_URL = "https://api-endpoint.igdb.com/games/" + popularGamesIdList[i] + "?fields=name,cover,genres";

		fetch(PROXY_URL + IGDB_URL, {
		method: 'GET',
		headers: {
			"user-key": '15870042b514b393825fc09f6b04056b',
			"accept": 'application/json'
		}
		})
		.then(res => res.json())
		.then(data => {
			popularGamesRenderList.push(data);
		})
		.catch(err => {
			console.log(err);
		});
	}
	return popularGamesRenderList;
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", transform: "scale(3.0)"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", transform: "scale(3.0)"}}
      onClick={onClick}
    />
  );
}
export class PopularGamesSlider extends React.Component {
	render() {
		const gameProfile = this.props.gameProfile;

		getPopularGamesList();

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

		return (

			<Slider {...settings}>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
			</Slider>
		);
	}
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(PopularGamesSlider);