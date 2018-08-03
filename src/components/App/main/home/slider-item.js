import React from 'react';

export default class SliderItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		
		const gameProfile = this.props.gameProfile;
		const popularGamesList = this.props.popularGamesList;
		
		return (
				<div className="slider-item-container">
					<img src={"//images.igdb.com/igdb/image/upload/t_cover_big/" + this.props.url + ".jpg"} />
					<div className="slider-item-info-container">
						<p>{this.props.name}</p>
						<p>{this.props.genres}</p>
					</div>
				</div>
		);
	}
}