import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import AgeRatingSection from './age-rating-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<AgeRatingSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<AgeRatingSection store={store} />);
    });
});
