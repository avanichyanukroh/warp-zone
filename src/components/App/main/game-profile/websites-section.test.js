import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import WebsitesSection from './websites-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<WebsitesSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<WebsitesSection store={store} />);
    });
});
