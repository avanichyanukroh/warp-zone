import React from 'react';
import { createStore } from 'redux';
import {shallow, mount} from 'enzyme';
import VideoPlayer from './video-player';
import { warpZoneReducer } from '../../../../reducers';

describe('<VideoPlayer />', () => {
    it('Renders without crashing', () => {
    	let store = createStore(
	    		warpZoneReducer, 
	    		{searchResults: [{name: "", genres:""}],
	    		searchTerm: "",
	    		redirectToSearchResults: false,
	    		loggedInUser: "",
	    		userProfile: {username: ""}}
    		);

        shallow(<VideoPlayer store={store} />);
    });
});
