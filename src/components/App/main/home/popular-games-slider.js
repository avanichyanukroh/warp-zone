import React from 'react';
import Slider from 'react-slick';
import SliderItem from './slider-item'
import {connect} from 'react-redux';
import { renderHome } from '../../../../actions';
import './popular-games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

let SLIDERITEMSARRAY = [];

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
			error: null,
			isLoading: false,
			items1: [
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				},
				{
					name: "",
				 	genres: [],
				 	cover: {
				 		cloudinary_url:""
				 	}
				}
			]

		};

		this.loadSlider = this.loadSlider.bind(this);
	}

	componentDidMount() {
		this.loadSlider();
	};

	loadSlider() {
		this.setState({
			error: null,
			isLoading: null,
		});
		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
		const IGDB_URL = "https://api-endpoint.igdb.com/games/?fields=name,cover,genres,popularity&order=popularity:desc";
		fetch(PROXY_URL + IGDB_URL, {
			method: 'GET',
			headers: {
				"user-key": '15870042b514b393825fc09f6b04056b',
				"accept": 'application/json'
			}
		})
		.then(res => {return res.json()})
		.then(data => {
			console.log(data);

			for (let i = 0; i < data.length; i ++) {
				this.setState(`items${i}`:data[i]});
			}
			this.props.dispatch(renderHome(data));
		})
		// .then((data) => this.setState({isLoading: false, items: 

		// 	[{key0: "value0", key1: {key2: "value3"}}]

		// }))
		.catch(err => {
			console.log(err);
			this.setState({isLoading: true, err});
		});
	};



	componentDidUpdate() {

	}
	render() {
		
		const gameProfile = this.props.gameProfile;
		const popularGamesList = this.props.popularGamesList;
		const { error, isLoading, items }  = this.state;
		// let sliderItems=[];
		console.log(this.state.items);
		// if (!(sliderItems.length = 0)) {
		// 	for (let i = 0; i < sliderItemsArray.length; i++) {
		// 		sliderItems.push(
		// 			<SliderItem 
		// 			// name={ sliderItemsArray[i].name }
		// 			// genres={ sliderItemsArray[i].genres }
		// 			// url={sliderItemsArray[i].cover.cloudinary_url}
		// 			 />
		// 			);
		// 	}
		// }


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

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			return <p>Loading ...</p>;
		}

		return (

			<Slider {...settings}>

			</Slider>
		);
	}
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile,
	popularGamesList: state.popularGamesList
})

export default connect(mapStateToProps)(PopularGamesSlider);