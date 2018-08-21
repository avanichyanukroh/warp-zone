import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import SignUpAndLoginModal from './sign-up-and-login-modal';
import { warpZoneReducer } from '../../../reducers';

describe('<SignUpAndLoginModal />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<SignUpAndLoginModal store={store} />);
    });
});
