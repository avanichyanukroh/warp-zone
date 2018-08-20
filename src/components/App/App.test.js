import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import App from './App';
import { warpZoneReducer } from '../../reducers';

describe('<App />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<App store={store} />);
    });
});