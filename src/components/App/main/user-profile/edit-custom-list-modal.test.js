import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import EditCustomListModal from './user-profile-main-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<EditCustomListModal />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<EditCustomListModal store={store} />);
    });
});
