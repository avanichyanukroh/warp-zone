import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import ComingSoonGamesSlider from './popular-games-slider';
import { warpZoneReducer } from '../../../../reducers';

describe('<ComingSoonGamesSlider />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<ComingSoonGamesSlider store={store} />);
    });
});
