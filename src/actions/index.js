export const RENDER_HOME = 'RENDER_HOME';
export const renderHome = (data) => ({
	type: RENDER_HOME,
	popularGamesList: data
});

export const RENDER_SEARCH_RESULTS = 'RENDER_SEARCH_RESULTS';
export const renderSearchResults = (data, searchTerm) => ({
	type: RENDER_SEARCH_RESULTS,
	searchResults: data,
	searchTerm: searchTerm
});

export const RESET_REDIRECT = 'RESET_REDIRECT';
export const resetRedirect = () => ({
	type: RESET_REDIRECT
});

export const SELECTED_GAME_PROFILE_TO_RENDER = 'SELECTED_GAME_PROFILE_TO_RENDER';
export const selectedGameProfileToRender = (selectedGameProfile) => ({
	type: SELECTED_GAME_PROFILE_TO_RENDER,
	selectedGameProfile: selectedGameProfile
});

export const PRICE_LIST_TO_RENDER = 'PRICE_LIST_TO_RENDER';
export const priceListToRender = (gamePriceListExactMatch, gamePriceListSimilarMatch) => ({
	type: PRICE_LIST_TO_RENDER,
	gamePriceListExactMatch: gamePriceListExactMatch,
	gamePriceListSimilarMatch: gamePriceListSimilarMatch
});

export const LOGGED_IN_USER = 'LOGGED_IN_USER';
export const loggedInUser = (username, user) => ({
	type: LOGGED_IN_USER,
	loggedInUser: username,
	userProfile: user
});

export const LOG_OUT_USER = 'LOG_OUT_USER';
export const logOutUser = () => ({
	type: LOG_OUT_USER
});

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const updateUserProfile = (userProfile) => ({
	type: UPDATE_USER_PROFILE,
	userProfile: userProfile
});


export const CLEAR_GAME_PROFILE = 'CLEAR_GAME_PROFILE';
export const clearGameProfile = () => ({
	type: CLEAR_GAME_PROFILE
});
//codes below are redux-thunk middleware
export const getSelectedGameProfile = selectedGameProfile => dispatch => {
	let companiesToSearch = [];

	selectedGameProfile.developers.map(developer => companiesToSearch.push(developer));
	selectedGameProfile.publishers.map(publisher => companiesToSearch.push(publisher));

	const joinedCompaniesToSearch = companiesToSearch.join(",");

	const PROXY_URL = "https://cors-anywhere-proxy-path.herokuapp.com/";
	const IGDB_URL = "https://api-endpoint.igdb.com/companies/" + joinedCompaniesToSearch +  "?fields=name";
		
	fetch(PROXY_URL + IGDB_URL, {
		method: 'GET',
		headers: {
			"user-key": '0f9d8cb6b2a5a7df7d5a7449fa3c73a3',
			"accept": 'application/json'
		}
	})
	.then(res => {
		return res.json();
	})
	.then(data => {
		let companyIdConverter = {};
		let developers = [];
		let publishers = [];

		data.map(company => companyIdConverter[company.id] = company.name);
		selectedGameProfile.developers.map(developer => developers.push(companyIdConverter[developer]));
		selectedGameProfile.publishers.map(publisher => publishers.push(companyIdConverter[publisher]));
		selectedGameProfile.developers = developers;
		selectedGameProfile.publishers = publishers;
		dispatch(selectedGameProfileToRender(selectedGameProfile));
	})
	.then(data => {
		dispatch(getGamePriceList(selectedGameProfile.name));
	})
	.catch(err => {
		console.log(err);
	});
}

export const getGamePriceList = profileName => dispatch => {
	const PROXY_URL = "https://cors-anywhere-proxy-path.herokuapp.com/";
	const PRICE_CHARTING_URL = "https://www.pricecharting.com/api/products?t=66b5c94722879a1d260216f923ab381f633e1eb4&q=" + profileName;
	fetch(PROXY_URL + PRICE_CHARTING_URL, {
		method: 'GET'
	})
	.then(res => {return res.json()})
	.then(data => {
		let gamePriceListExactMatch = [];
		let gamePriceListSimilarMatch = [];
		data.products.map(item => {
			if (item["product-name"] === profileName) {
				gamePriceListExactMatch.push(item);
			}
			else {
				gamePriceListSimilarMatch.push(item);
			}
		});
		dispatch(priceListToRender(gamePriceListExactMatch, gamePriceListSimilarMatch));
	})
	.catch(err => {
		console.log(err);
	});
}


export const getGameProfileList = searchTerm => dispatch => {
	const PROXY_URL = "https://cors-anywhere-proxy-path.herokuapp.com/";
	const IGDB_URL = "https://api-endpoint.igdb.com/games/?search=" + searchTerm + "&fields=id,name,url,summary,storyline,collection,rating,popularity,total_rating,total_rating_count,rating_count,developers,publishers,game_engines,category,time_to_beat,player_perspectives,game_modes,themes,genres,first_release_date,platforms,release_dates,alternative_names,screenshots,videos,cover,esrb,pegi,websites";
	fetch(PROXY_URL + IGDB_URL, {
		method: 'GET',
		headers: {
			"user-key": '0f9d8cb6b2a5a7df7d5a7449fa3c73a3',
			"accept": 'application/json'
		}
	})
	.then(res => {
		return res.json();
	})
	.then(data => {
		let itemsList = [];

		data.map(item => {
			if ("name" in item && "cover" in item && "first_release_date" in item) {
				itemsList.push(item);
			}
		});
		dispatch(renderSearchResults(itemsList, searchTerm));

	})
	.catch(err => {
		console.log(err);
	});
}