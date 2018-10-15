import { renderHome, renderSearchResults, resetRedirect, loggedInUser, selectedGameProfileToRender, priceListToRender, logOutUser, updateUserProfile } from './index';
import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER, PRICE_LIST_TO_RENDER, LOG_OUT_USER, UPDATE_USER_PROFILE } from './index';

describe('renderHome', () => {
	it('Should return the action', () => {
		const data = {
			id: "123",
			name: "game 1",
			genres: ["genre 1", "genre 2"]
			};

		const action = renderHome(data);

		expect(action.type).toEqual(RENDER_HOME);
		expect(action.popularGamesList).toEqual(data);
	});
});

describe('renderSearchResults', () => {
	it('Should return the action', () => {
		const data = {
			id: "123",
			name: "game 1",
			genres: ["genre 1", "genre 2"]
			};

		const action = renderSearchResults(data, "game");

		expect(action.type).toEqual(RENDER_SEARCH_RESULTS);
		expect(action.searchResults).toEqual(data);
		expect(action.searchTerm).toEqual("game");
	});
});

describe('resetRedirect', () => {
	it('Should return the action', () => {

		const action = resetRedirect();

		expect(action.type).toEqual(RESET_REDIRECT);
	});
});

describe('selectedGameProfileToRender', () => {
	it('Should return the action', () => {
		const selectedGameProfile = {
			id: "123",
			name: "game 1",
			genres: ["genre 1", "genre 2"]
			};

		const action = selectedGameProfileToRender(selectedGameProfile);

		expect(action.type).toEqual(SELECTED_GAME_PROFILE_TO_RENDER);
		expect(action.selectedGameProfile).toEqual(selectedGameProfile);
	});
});

describe('priceListToRender', () => {
	it('Should return the action', () => {
		const gamePriceListExactMatch = [{new_price: "1", used_price: "2"}];
		const gamePriceListSimilarMatch = [{new_price: "3", used_price: "4"}];

		const action = priceListToRender(gamePriceListExactMatch, gamePriceListSimilarMatch);

		expect(action.type).toEqual(PRICE_LIST_TO_RENDER);
		expect(action.gamePriceListExactMatch).toEqual(gamePriceListExactMatch);
		expect(action.gamePriceListSimilarMatch).toEqual(gamePriceListSimilarMatch);
	});
});

describe('loggedInUser', () => {
	it('Should return the action', () => {
		const username = "dummy";
		const user = {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]}

		const action = loggedInUser(username, user);

		expect(action.type).toEqual(LOGGED_IN_USER);
		expect(action.loggedInUser).toEqual(username);
		expect(action.userProfile).toEqual(user);
	});
});

describe('logOutUser', () => {
	it('Should return the action', () => {

		const action = logOutUser();

		expect(action.type).toEqual(LOG_OUT_USER);
	});
});

describe('updateUserProfile', () => {
	it('Should return the action', () => {
		const userProfile = {username: "dummy", wish_list: [{id: "123", name: "game title 1"}]};

		const action = updateUserProfile(userProfile);

		expect(action.type).toEqual(UPDATE_USER_PROFILE);
		expect(action.userProfile).toEqual(userProfile);
	});
});
