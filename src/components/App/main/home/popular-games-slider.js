import React from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import { renderHome } from '../../../../actions';
import './popular-games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

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

export class PopularGamesSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.loadSlider = this.loadSlider.bind(this);
	}

	componentDidMount() {
		this.loadSlider();
	};

	loadSlider() {
let genreMap = {};
for (let i = 0; i <= 33; i ++) {

		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
		// const IGDB_URL = "https://api-endpoint.igdb.com/games/?fields=name,cover,genres,popularity&order=popularity:desc";
		const IGDB_URL = "https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/genres/" + i + "?fields=name"
		fetch(PROXY_URL + IGDB_URL, {
			method: 'GET',
			headers: {
				"user-key": '15870042b514b393825fc09f6b04056b',
				"accept": 'application/json'
			}
		})
		.then(res => {return res.json()})
		// .then(data => {
		// 	let itemsList = [];

		// 	data.map(item => {
		// 		if ("name" in item && "cover" in item && "genres" in item) {
		// 			itemsList.push(item);
		// 		}
		// 	});
		// 	this.setState({items: itemsList});
		// })
		.then(data => {
			console.log(data[0], data[1]);
			genreMap[i] = data[0].name;
		})
		.then(()=>console.log(genreMap))
		.catch(err => {
			console.log(err);
		});
	};
}

	render() {
		
		const gameProfile = this.props.gameProfile;
		const { items }  = this.state;
		let sliderItems = [];
			for (let i = 0; i < items.length; i++) {

				let url = i in items ? items[i].cover.cloudinary_id : null;
				sliderItems.push(
				<div className="slider-item-container" key={ i in items ? items[i].id : null }>
					<div className="popular-slider-img-container">
						<img className="popular-slider-img"src={ "//images.igdb.com/igdb/image/upload/t_cover_big/" + url + ".jpg" } />
					</div>
					<div className="slider-item-info-container">
						<p className="slider-item-title">{ i in items ? items[i].name : null }</p>
						<p>{ i in items ? items[i].genres : null }</p>
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