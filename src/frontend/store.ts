import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

export interface IHotel {
    name: string;
    starRating: number,
    facilities: string[];
}

export type IResultsState = {
    hotels: IHotel[];
    validFilters: string[];
}

export interface IAppState {
    results: IResultsState;
}

export const DEFAULT_STATE: IAppState = {
    results: {
        hotels:       [],
        validFilters: []
    }
};

export default createStore(
    reducers,
    DEFAULT_STATE,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
