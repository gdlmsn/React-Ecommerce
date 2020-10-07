import {createStore,applyMiddleware,combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducer';

const initialState = {};
const compposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    compposeEnhancer(applyMiddleware(thunk))
);
export default store;