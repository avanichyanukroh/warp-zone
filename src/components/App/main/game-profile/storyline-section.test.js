import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import StorylineSection from './storyline-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<StorylineSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<StorylineSection store={store} />);
    });
});