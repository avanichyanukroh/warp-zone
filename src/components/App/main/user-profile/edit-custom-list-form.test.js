import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import EditCustomListForm from './user-profile-main-content-section';
import { warpZoneReducer } from '../../../../reducers';

describe('<EditCustomListForm />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<EditCustomListForm store={store} />);
    });
});
