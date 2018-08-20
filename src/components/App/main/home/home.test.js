import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import Home from './home';
import { warpZoneReducer } from '../../../../reducers';

describe('<Home />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<Home store={store} />);
    });
});