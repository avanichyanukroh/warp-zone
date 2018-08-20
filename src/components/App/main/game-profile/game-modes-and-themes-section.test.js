import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import GameModesAndThemesSection from './game-modes-and-themes-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<GameModesAndThemesSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<GameModesAndThemesSection store={store} />);
    });
});