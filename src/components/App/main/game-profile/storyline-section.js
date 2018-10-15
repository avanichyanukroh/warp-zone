import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './storyline-section.css';

export class StorylineSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			storyline: "storyline" in this.props.gameProfile &
			 (!(this.props.gameProfile.storyline === null))
			 ? this.props.gameProfile.storyline.slice(0,339) + "...": "Storyline not available."
		};
		this.switchStorylineDescription = this.switchStorylineDescription.bind(this);
	};

	switchStorylineDescription(event) {
		this.setState({storyline: this.props.gameProfile.storyline});
		document.getElementById("read-more-storyline").style.display = "none";
	};

	componentDidMount() {
		this.setState({
			storyline: "storyline" in this.props.gameProfile &&
			(!(this.props.gameProfile.storyline === null)) ?
			this.props.gameProfile.storyline.slice(0,339) + "...": "Storyline not available."})
	};

	render() {
		if (this.state.storyline === "Storyline not available.") {
			return (

				<div className="main-content-section-container">
					<h3>Storyline</h3>
					<br/>
					<p id="storyline">{this.state.storyline}</p>
				</div>
			);
		}
		else {
			return (

				<div className="main-content-section-container">
					<h3>Storyline</h3>
					<br/>
					<p id="storyline">{this.state.storyline}</p>
					<span 
						id="read-more-storyline"
						onClick={() => this.switchStorylineDescription()}>
						Read more</span>
				</div>
			);
		};
	};
}

const mapStateToProps = state => ({
	gameProfile: state.gameProfile
})

export default connect(mapStateToProps)(StorylineSection);