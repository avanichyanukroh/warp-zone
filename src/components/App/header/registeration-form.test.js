import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import RegisterationForm from './registeration-form';
import { warpZoneReducer } from '../../../reducers';

describe('<RegisterationForm />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<RegisterationForm store={store} />);
    });
});