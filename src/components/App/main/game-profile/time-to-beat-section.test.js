import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import TimeToBeatSection from './time-to-beat-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<TimeToBeatSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<TimeToBeatSection store={store} />);
    });
});