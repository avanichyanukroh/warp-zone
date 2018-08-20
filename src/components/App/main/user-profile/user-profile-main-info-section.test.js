import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import UserProfileMainInfoSection from './user-profile-main-info-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<UserProfileMainInfoSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<UserProfileMainInfoSection store={store} />);
    });
});