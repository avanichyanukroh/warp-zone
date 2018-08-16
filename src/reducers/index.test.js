 import { warpZoneReducer } from './index';
 import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER, PRICE_LIST_TO_RENDER, LOG_OUT_USER, UPDATE_USER_PROFILE } from '../actions';
import { renderSearchResults } from '../actions';
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
			})
		});
	});