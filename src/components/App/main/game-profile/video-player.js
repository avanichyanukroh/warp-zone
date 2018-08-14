import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './video-player.css';

export class VideoPlayer extends React.Component {

	render() {
		const {gameProfile} = this.props;
		const gameUrl = "videos" in gameProfile && !(gameProfile.videos === null) ? gameProfile.videos[0].video_id : null;
		const videoPlayerUrl = "https://www.youtube.com/embed/" + gameUrl + "?autoplay=1&mute=1";
		
		return (

			<div className="video-player-container">
				<iframe 
					className="col-12 video-player"
					allowFullScreen="allowfullscreen"
					src={videoPlayerUrl}
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