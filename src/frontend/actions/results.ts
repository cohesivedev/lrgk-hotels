import {ActionsUnion, IActionPromise} from '../types/store';
import {IHotel} from '../store';
import {createAction} from '.';
import {fetchWithMockAPI} from '../remote';

export type ResultsAction = ActionsUnion<typeof ResultsActions>;

export enum ResultsActionTypes {
    GET_RESULTS_HOTELS = 'RESULTS/GET_HOTELS'
}

export enum ResultsFetchEndpoints {
    Hotels = '/hotels'
}

export function getHotels(): IActionPromise {
    return dispatch => {
        fetchWithMockAPI(ResultsFetchEndpoints.Hotels)
            .then(payload => dispatch(ResultsActions.getResultsHotels(payload)));
    };
}

export const ResultsActions = {
    getResultsHotels: (payload: IHotel[]) => createAction(ResultsActionTypes.GET_RESULTS_HOTELS, payload)
    // possibly other result types other than hotel here
};
