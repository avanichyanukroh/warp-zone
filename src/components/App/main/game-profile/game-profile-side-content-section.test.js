import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameProfileSideContentSection from './game-profile-side-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameProfileSideContentSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameProfileSideContentSection store={store} />);
    });
});