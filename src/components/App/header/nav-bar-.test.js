import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import NavBar from './nav-bar';
import { warpZoneReducer } from '../../../reducers';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<NavBar store={store} />);
    });
});