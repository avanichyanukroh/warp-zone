import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import AlternativeNamesSection from './alternative-names-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<AlternativeNamesSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<AlternativeNamesSection store={store} />);
    });
});