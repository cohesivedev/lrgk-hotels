import {IResultsState} from '../store';
import {ResultsAction, ResultsActionTypes} from '../actions/results';

export default function (state: IResultsState, action: ResultsAction): IResultsState {
    let resultsState = {...state};

    switch (action.type) {
        case ResultsActionTypes.GET_RESULTS_HOTELS:
            const {payload} = action;


            resultsState = {
                ...resultsState,
                hotels:       payload!,
                validFilters: [] // todo: put all valid facility filters in here, computed and stored once per fetch
            };
            break;

        default:
    }

    return resultsState;
}
