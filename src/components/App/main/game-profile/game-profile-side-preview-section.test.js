import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameProfileSidePreviewSection from './game-profile-side-preview-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameProfileSidePreviewSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameProfileSidePreviewSection store={store} />);
    });
});
