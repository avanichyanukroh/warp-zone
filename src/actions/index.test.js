  import { renderSearchResults } from './index';
 import { RENDER_HOME, RENDER_SEARCH_RESULTS, RESET_REDIRECT, LOGGED_IN_USER, SELECTED_GAME_PROFILE_TO_RENDER, PRICE_LIST_TO_RENDER, LOG_OUT_USER, UPDATE_USER_PROFILE } from './index';

describe('renderSearchResults', () => {
    it('Should return the action', () => {
        const data = {
        	name: "game 1",
        	genres: ["genre 1", "genre 2"]
    		};
        const action = renderSearchResults(data, "game");
        expect(action.type).toEqual(RENDER_SEARCH_RESULTS);
        expect(action.searchResults).toEqual(data);
        expect(action.searchTerm).toEqual("game");
    });
});
