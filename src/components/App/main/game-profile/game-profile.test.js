import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameProfile from './game-profile';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameProfile />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameProfile store={store} />);
    });
});