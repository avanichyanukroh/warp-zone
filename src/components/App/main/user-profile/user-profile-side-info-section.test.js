import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import UserProfileSideInfoSection from './user-profile-side-info-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<UserProfileSideInfoSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<UserProfileSideInfoSection store={store} />);
    });
});