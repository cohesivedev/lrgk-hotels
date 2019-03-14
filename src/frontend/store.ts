import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

export interface IHotel {
    name: string;
    starRating: number,
    facilities: string[];
}

export interface IAppState {
}

export const DEFAULT_STATE: IAppState = {};

export default createStore(
    reducers,
    DEFAULT_STATE,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
