import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import UserProfileMainContentSection from './user-profile-main-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<UserProfileMainContentSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<UserProfileMainContentSection store={store} />);
    });
});
