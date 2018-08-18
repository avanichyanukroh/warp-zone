import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import UserProfileSideContentSection from './user-profile-side-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<UserProfileSideContentSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<UserProfileSideContentSection store={store} />);
    });
});