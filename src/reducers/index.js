import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER } from '../actions';

const initialState = {

	loggedInUser: undefined,
	redirectToSearchResults: false,
	popularGamesList: [],
	searchResults: [],
	searchTerm: "",
	gameProfile: {

		"id": 0,
		"name": "",
		"url": "",
		"summary": "",
		"storyline": "",
		"collection": 0,
		"rating": 0,
		"popularity": 0,
		"total_rating": 0,
		"total_rating_count": 0,
		"rating_count": 0,
		"developers": [],
		"publishers": [],
		"game_engines": [],
		"category": 0,
		"time_to_beat": {
			"hastly": 0,
			"normally": 0,
			"completely": 0
		},
		"player_perspectives": [],
		"game_modes": [],
		"themes": [],
		"genres": [],
		"first_release_date": 0,
		"platforms": [],
		"release_dates": [
			{
				"category": 0,
				"platform": 0,
				"date": 0,
				"region": 0,
				"human": "",
				"y": 0,
				"m": 0
			}],
		"alternative_names": [
			{
				"name": ""
			},
			{
				"name": ""
			}
		],
		"screenshots": [
			{
				"url": "",
				"cloudinary_id": "",
				"width": 0,
				"height": 0
			}],
		"videos": [
			{
				"name": "",
				"video_id": ""
			}],
		"cover": {
			"url": "",
			"cloudinary_id": "",
			"width": 0,
			"height": 0
		},
		"esrb": {
			"synopsis": 0,
			"rating": 0
		},
		"pegi": {
			"rating": 0
		},
		"websites": [
			{
				"category": 0,
				"url": ""
			}]
	},

	priceList: {

		"asin": "",
		"console-name": "",
		"id": "",
		"loose-price": 0,
		"new-price": 0,
		"product-name": ""
		},

	userProfile: {

		username: "",
		password: "",
		real_name: "",
		user_profile_summary: "",
		wish_list: [{}]
	}
}

export const warpZoneReducer = (state = initialState, action) => {
	let data;
	if (action.type === RENDER_HOME) {
		return Object.assign({}, state, {
			popularGamesList: action.data,
			redirectToSearchResults: false
		});
	};

	if (action.type === RENDER_SEARCH_RESULTS) {
		console.log(data);
		return Object.assign({}, state, {
			redirectToSearchResults: true,
			searchResults: action.searchResults,
			searchTerm: action.searchTerm
		});
	};

	if (action.type === RESET_REDIRECT) {
		return Object.assign({}, state, {
			redirectToSearchResults: false
		});
	};

	if (action.type === SELECTED_GAME_PROFILE_TO_RENDER) {
		return Object.assign({}, state, {
			gameProfile: action.selectedGameProfile
		});
	};

	if (action.type === LOGGED_IN_USER) {
		return Object.assign({}, state, {
			loggedInUser: action.loggedInUser
		});
	};


	return state;
};