import React from 'react';
import Slider from "react-slick";
import {connect} from 'react-redux';
import {RENDER_HOME} from 
import './popular-games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

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
			items: {}

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
		.then(res => res.json())
		.then(data => {
			console.log(data);
			this.setState({isLoading: false, items: data[0].name});
		})
		.catch(err => {
			console.log(err);
			this.setState({isLoading: true, err});
		});
	};



	componentDidUpdate() {
		console.log(this.state.items);

	}
	render() {
		
		const gameProfile = this.props.gameProfile;
		const { error, isLoading, items }  = this.state;
		// const arrayOfGameCovers = popularGamesList.map(item => {return item.cover});
		console.log(items);
		// console.log(arrayOfGameCovers[0]);

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
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>title</p>
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