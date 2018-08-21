import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import SearchResults from './search-results';
import { warpZoneReducer } from '../../../../reducers';

describe('<SearchResults />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<SearchResults store={store} />);
    });
});
