import { createStore, applyMiddleware } from 'redux';
import { loadState, saveState } from './local-storage';
import {warpZoneReducer} from './reducers';
import thunk from 'redux-thunk';

const persistedState = loadState();
const store = createStore(
	warpZoneReducer,
	persistedState,
	applyMiddleware(thunk)
	);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;