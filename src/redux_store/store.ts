import { combineReducers, createStore } from 'redux';
import StoreReducer from './store_reducer';

const reducers: any = combineReducers({
   store: StoreReducer,
})

const store = createStore(reducers);

export default store;