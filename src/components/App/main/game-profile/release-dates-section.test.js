import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import ReleaseDatesSection from './release-dates-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<ReleaseDatesSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<ReleaseDatesSection store={store} />);
    });
});