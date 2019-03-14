import {Action} from 'redux';

import {IAppState} from '../store';
import resultsReducer from './results';

export default function reducers(state: IAppState, action: Action): IAppState {
    return {
        ...state,
        results: resultsReducer(state.results, action)
    };
}
