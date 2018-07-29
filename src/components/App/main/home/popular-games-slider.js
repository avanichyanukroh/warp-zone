import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux';
import './popular-games-slider.css';
import '../../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", transform: "scale(3.0)"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
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
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + gameProfile.cover.cloudinary_id + ".jpg"} />
					<div className="slider-item-info-container">
						<p>Title here</p>
						<p>other info</p>
					</div>
				</div>
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