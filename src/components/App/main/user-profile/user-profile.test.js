import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import UserProfile from './user-profile';
import { warpZoneReducer } from '../../../../reducers';

describe('<UserProfile />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<UserProfile store={store} />);
    });
});