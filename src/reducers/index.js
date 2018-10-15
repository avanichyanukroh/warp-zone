import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER, PRICE_LIST_TO_RENDER, LOG_OUT_USER, UPDATE_USER_PROFILE } from '../actions';

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

	priceListExactMatch: [],

	priceListSimilarMatch: [],

	userProfile: {

		username: "",
		password: "",
		nickname: "",
		user_portrait: "",
		user_profile_summary: "",
		platform: "",
		genre_of_interest: "",
		wish_list: [{}],
		custom_list:[{}]
	}
}

export const warpZoneReducer = (state = initialState, action) => {
	if (action.type === RENDER_HOME) {
		return Object.assign({}, state, {
			popularGamesList: action.popularGamesList,
			redirectToSearchResults: false
		});
	};

	if (action.type === RENDER_SEARCH_RESULTS) {
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

	if (action.type === PRICE_LIST_TO_RENDER) {
		return Object.assign({}, state, {
			priceListExactMatch: action.gamePriceListExactMatch,
			priceListSimilarMatch: action.gamePriceListSimilarMatch
		});
	};

	if (action.type === LOGGED_IN_USER) {
		return Object.assign({}, state, {
			loggedInUser: action.loggedInUser,
			userProfile: action.userProfile
		});
	};

	if (action.type === LOG_OUT_USER) {
		return Object.assign({}, state, {
			loggedInUser: undefined,
			userProfile: undefined
		});
	};

	if (action.type === UPDATE_USER_PROFILE) {
		return Object.assign({}, state, {
			userProfile: action.userProfile
		});
	};

	return state;
};