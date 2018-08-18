import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import WishListSection from './wish-list-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<WishListSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<WishListSection store={store} />);
    });
});