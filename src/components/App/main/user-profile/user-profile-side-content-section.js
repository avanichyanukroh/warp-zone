import React from 'react';
import { connect } from 'react-redux';
import '../../float-grid.css';
import "./user-profile-side-content-section.css";
import EditCustomListModal from './edit-custom-list-modal';

class UserProfileSideContentSection extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		const { userProfile } = this.props;
		let customListItems = [];

		if (userProfile.custom_list.length > 0) {
			for (let i = 0; i < userProfile.custom_list.length; i++) {

				let contentList = [];

				customListItems.push(
					<div className="custom-list-item" key={ i in userProfile.custom_list ? i : null }>
						<EditCustomListModal modalKey={ i in userProfile.custom_list ? i : null } />
						<div className="custom-list-item-title">
							<h3>{userProfile.custom_list[i].title}</h3>
						</div>
							<div className="content-items-container">
								<p className="content-item" key={ i in userProfile.custom_list ? i : null }>{userProfile.custom_list[i].content}</p>
							</div>
					</div>
				);
			};
		};
		return (
			
			<div className="col-4 custom-list-container">
				{customListItems}
			</div>
		);
	};
};

const mapStateToProps = state => ({
	userProfile: state.userProfile
});

export default connect(mapStateToProps)(UserProfileSideContentSection);