import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import Footer from './footer';
import { warpZoneReducer } from '../../../reducers';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<Footer store={store} />);
    });
});
