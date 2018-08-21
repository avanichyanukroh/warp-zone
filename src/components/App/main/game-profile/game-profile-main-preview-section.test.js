import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameProfileMainPreviewSection from './game-profile-main-preview-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameProfileMainPreviewSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameProfileMainPreviewSection store={store} />);
    });
});
