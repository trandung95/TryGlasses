import { combineReducers, createStore } from 'redux';
import { appTryGlassesReducers } from './reducers/appTryGlassesReducers';

const rootReducer = combineReducers({
    appTryGlassesReducers: appTryGlassesReducers
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());