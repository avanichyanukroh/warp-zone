import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import PopularGamesSlider from './popular-games-slider';
import { warpZoneReducer } from '../../../../reducers';

describe('<PopularGamesSlider />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<PopularGamesSlider store={store} />);
    });
});