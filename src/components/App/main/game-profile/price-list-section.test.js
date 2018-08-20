import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import PriceListSection from './price-list-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<PriceListSection />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<PriceListSection store={store} />);
    });
});