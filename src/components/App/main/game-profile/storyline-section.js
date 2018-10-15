import React from 'react';
import {connect} from 'react-redux';
import '../../float-grid.css';
import './storyline-section.css';

export class StorylineSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			storyline: "Storyline not available."
		};
		this.switchStorylineDescription = this.switchStorylineDescription.bind(this);
	};

	switchStorylineDescription(event) {
		document.getElementById("storyline").textContent = `${this.props.gameProfile.storyline}`
		document.getElementById("read-more-storyline").style.display = "none";
	};

	componentDidMount() {

	};

	render() {
		if (this.props.storyline === undefined) {
			return (
				<div className="main-content-section-container">
					<h3>Storyline</h3>
					<br/>
					<p id="storyline">Storyline not available.</p>
				</div>
			);
		}
		else {
			return (

				<div className="main-content-section-container">
					<h3>Storyline</h3>
					<br/>
					<p id="storyline">
						{"storyline" in this.props.gameProfile &&
						(!(this.props.gameProfile.storyline === null)) ?
						this.props.gameProfile.storyline.slice(0,339) + "...": "Storyline not available."}
					</p>
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