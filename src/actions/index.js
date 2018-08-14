export const RENDER_HOME = 'RENDER_HOME';
export const renderHome = () => ({
    type: RENDER_HOME
});

export const RENDER_USER_PROFILE = 'RENDER_USER_PROFILE';
export const renderUserProfile = () => ({
    type: RENDER_USER_PROFILE
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

export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST';
export const addToWishList = () => ({
    type: ADD_TO_WISH_LIST
});