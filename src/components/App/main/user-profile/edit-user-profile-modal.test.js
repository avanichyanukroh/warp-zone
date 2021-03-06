import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import EditUserProfileModal from './user-profile-main-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<EditUserProfileModal />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<EditUserProfileModal store={store} />);
    });
});
