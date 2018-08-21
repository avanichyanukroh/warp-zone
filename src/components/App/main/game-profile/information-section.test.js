import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import InformationSection from './information-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<InformationSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<InformationSection store={store} />);
    });
});
