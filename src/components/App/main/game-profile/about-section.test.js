import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import AboutSection from './about-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<AboutSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<AboutSection store={store} />);
    });
});