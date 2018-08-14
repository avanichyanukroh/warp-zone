import { createStore } from 'redux';
import { loadState, saveState } from './local-storage';
import {warpZoneReducer} from './reducers';

const persistedState = loadState();
const store = createStore(
	warpZoneReducer,
	persistedState
	)

store.subscribe(() => {
	saveState(store.getState());
});

export default store;