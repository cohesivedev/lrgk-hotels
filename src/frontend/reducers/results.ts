import {IHotel, IResultsState} from '../store';
import {ResultsAction, ResultsActionTypes} from '../actions/results';

export function getValidFilters(payload: IHotel[]): string[] {
    const validFilters = new Set();

    payload!
        .forEach(hotel => {
            hotel.facilities
                .forEach(f => validFilters.add(f));
        });

    return Array.from(validFilters);
}

export default function (state: IResultsState, action: ResultsAction): IResultsState {
    let resultsState = {...state};

    switch (action.type) {
        case ResultsActionTypes.GET_RESULTS_HOTELS:
            const {payload} = action;


            resultsState = {
                ...resultsState,
                hotels:       payload!,
                validFilters: getValidFilters(payload!)
            };
            break;

        default:
    }

    return resultsState;
}
