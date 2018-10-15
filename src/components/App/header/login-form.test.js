import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import LoginForm from './login-form';
import { warpZoneReducer } from '../../../reducers';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<LoginForm store={store} />);
    });
});
