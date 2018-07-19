import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './video-player.css';

export class VideoPlayer extends React.Component {

	render() {
		const gameProfile = this.props.gameProfile;
		const videoPlayerStyle = {src: 'https://www.youtube.com/embed/qy8jmm9kY4A?autoplay=1'};
		
		return(
			<div className="video-player-container">
				<iframe 
					className="col-12 video-player"
					allowFullScreen="allowfullscreen"
					src="https://www.youtube.com/embed/qy8jmm9kY4A?autoplay=1"
					autoFocus>
				</iframe>
			</div>
		)
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(VideoPlayer);