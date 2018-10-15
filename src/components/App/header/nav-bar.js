import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../float-grid.css';
import './nav-bar.css';
import SignUpAndLoginModal from './sign-up-and-login-modal';
import { getGameProfileList, logOutUser } from '../../../actions';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
		this.submitSearch = this.submitSearch.bind(this);
	};

	handleInputChange(event) {

		this.setState({
			value: event.target.value
		})
	};

	handleLogOut() {
		this.props.dispatch(logOutUser());
	};

	submitSearch(event) {
		event.preventDefault();
		const searchTerm = this.state.value;
		this.props.dispatch(getGameProfileList(searchTerm));
		this.setState({value: ""});
	};

	render() {
		const { gameSearchResults, searchTerm, redirectToSearchResults, loggedInUser, userProfile } = this.props;
		
			if (redirectToSearchResults) {
				return (

					<nav className="nav-bar-container">
						<Redirect to={"/search-results?search=" + searchTerm} />

						<h2><Link className="main-logo" to="/">Warp Zone</Link></h2>
						<div className="search-bar-container">
							<form>
								<input 
									type="text" 
									placeholder="Search.." 
									name="search" 
									className="search-bar-input"
									value={this.state.value}
									onChange={this.handleInputChange} />
								<button 
									type="submit" 
									className="search-bar-btn"
									onClick={this.submitSearch}>
									<i className="fa fa-search"></i>
								</button>
							</form>
						</div>
						<div className="signup-login-container" id="modal-display">
							<SignUpAndLoginModal />
						</div>
						<div className="clear-both"></div>
					</nav>
			);
		};

			if (!(loggedInUser === undefined || userProfile === undefined)) {

				return (

					<nav className="nav-bar-container">

						<h2><Link className="main-logo" to="/">Warp Zone</Link></h2>
						<div className="search-bar-container">
							<form>
								<input 
									type="text" 
									placeholder="Search.." 
									name="search" 
									className="search-bar-input"
									value={this.state.value}
									onChange={this.handleInputChange} />
								<button 
									type="submit" 
									className="search-bar-btn"
									onClick={this.submitSearch}>
									<i className="fa fa-search"></i>
								</button>
							</form>
						</div>
						<div className="username-display-container">
							<Link className="user-profile-link" to="/user-profile">{ !(userProfile === undefined) ? userProfile.username : null}</Link>
							<Link className="user-log-out-link" to="/" onClick={()=> {this.handleLogOut()}}><i className="fas fa-sign-out-alt fa-lg"></i></Link>
						</div>
						<div className="clear-both"></div>
					</nav>
			);
		}
		else {

			return (

				<nav className="nav-bar-container">
					<h2><Link className="main-logo" to="/">Warp Zone</Link></h2>
					<div className="search-bar-container">
						<form>
							<input 
								type="text" 
								placeholder="Search.." 
								name="search" 
								className="search-bar-input"
								value={this.state.value}
								onChange={this.handleInputChange} />
							<button
								type="submit" 
								className="search-bar-btn"
								onClick={this.submitSearch}>
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div>
					<div className="signup-login-container" id="modal-display">
						<SignUpAndLoginModal />
					</div>
					<div className="clear-both"></div>
				</nav>
				);
		};
	};
};

const mapStateToProps = state => ({
	searchResults: state.searchResults,
	searchTerm: state.searchTerm,
	redirectToSearchResults: state.redirectToSearchResults,
	loggedInUser: state.loggedInUser,
	userProfile: state.userProfile
	
});

export default connect(mapStateToProps)(NavBar);