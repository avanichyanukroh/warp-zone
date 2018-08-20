import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameProfileMainContentSection from './game-profile-main-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameProfileMainContentSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameProfileMainContentSection store={store} />);
    });
});