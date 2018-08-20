import { warpZoneReducer } from './index';
import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER, PRICE_LIST_TO_RENDER, LOG_OUT_USER, UPDATE_USER_PROFILE } from '../actions';
import { renderHome, renderSearchResults, resetRedirect, loggedInUser, selectedGameProfileToRender, priceListToRender, logOutUser, updateUserProfile } from '../actions';

describe('renderHome', () => {
		it('render the home page', () => {
			let state = {
				popularGamesList: [{name: "game title 1", genres: ["genre 1", "genre 2"]}, {name: "game title 2", genres: ["genre 1", "genre 2"]}],
				redirectToSearchResults: true
			};

			const popularGamesList = [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}];

			state = warpZoneReducer(state, renderHome(popularGamesList));

			expect(state).toEqual({
				popularGamesList: [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}],
				redirectToSearchResults: false
			});
		});
	});

describe('renderSearchResults', () => {
		it('render a new search result', () => {
			let state = {
				searchResults: [{name: "game title 1", genres: ["genre 1", "genre 2"]}, {name: "game title 2", genres: ["genre 1", "genre 2"]}],
				redirectToSearchResults: false,
				searchTerm: "game"
			};

			const searchTerm = "new game";
			const newSearchResults = [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}];

			state = warpZoneReducer(state, renderSearchResults(newSearchResults, searchTerm));

			expect(state).toEqual({
				searchResults: [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}],
				redirectToSearchResults: true,
				searchTerm: "new game"
			});
		});
	});

describe('resetRedirect', () => {
		it('reset the redirect to search results page', () => {
			let state = {
				redirectToSearchResults: true
			};

			state = warpZoneReducer(state, resetRedirect());

			expect(state).toEqual({
				redirectToSearchResults: false
			});
		});
	});

describe('selectedGameProfileToRender', () => {
		it('render the home page', () => {
			let state = {
				gameProfile: [{name: "game title 1", genres: ["genre 1", "genre 2"]}, {name: "game title 2", genres: ["genre 1", "genre 2"]}]
			};

			const gameProfile = [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}];

			state = warpZoneReducer(state, selectedGameProfileToRender(gameProfile));

			expect(state).toEqual({
				gameProfile: [{name: "new game title 1", genres: ["new genre 1", "new genre 2"]}, {name: "new game title 2", genres: ["new genre 1", "new genre 2"]}]
			});
		});
	});

describe('priceListToRender', () => {
		it('searchs for the pricelist by game title to be rendered', () => {
			let state = {
				priceListExactMatch: [{new_price: 1, used_price: 1}],
				priceListSimilarMatch: [{new_price: 1, used_price: 1}]
			};

			const gamePriceListExactMatch = [{new_price: 2, used_price: 2}];
			const gamePriceListSimilarMatch = [{new_price: 2, used_price: 2}];
			state = warpZoneReducer(state, priceListToRender(gamePriceListExactMatch, gamePriceListSimilarMatch));

			expect(state).toEqual({
				priceListExactMatch: [{new_price: 2, used_price: 2}],
				priceListSimilarMatch: [{new_price: 2, used_price: 2}]
			});
		});
	});

describe('loggedInUser', () => {
		it('logs a user in and get their user profile', () => {
			let state = {
				loggedInUser: undefined,
				userProfile: undefined
			};

			const username = {username: "dummy"};
			const user = {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]};
			state = warpZoneReducer(state, loggedInUser(username, user));

			expect(state).toEqual({
				loggedInUser: {username: "dummy"},
				userProfile: {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]}
			});
		});
	});

describe('logOutUser', () => {
		it('log a user out, clearing user profile', () => {
			let state = {
				loggedInUser: {username: "dummy"},
				userProfile: {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]}
			};

			const username = {username: "dummy"};
			const user = {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]};
			state = warpZoneReducer(state, logOutUser());

			expect(state).toEqual({
				loggedInUser: undefined,
				userProfile: undefined
			});
		});
	});

describe('updateUserProfile', () => {
		it('update user profile if changes were made on the backend side', () => {
			let state = {
				userProfile: {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]}
			};

			const userProfile = {username: "dummy", wish_list: [{id: "123", name: "game title 1"}, {id: "1234", name: "game title 2"}]};
			state = warpZoneReducer(state, updateUserProfile(userProfile));

			expect(state).toEqual({
				userProfile: {username: "dummy", wish_list: [{id: "123", name: "game title 1"}, {id: "1234", name: "game title 2"}]}
			});
		});
	});