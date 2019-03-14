import resultsReducer, {getValidFilters} from './results';
import {IHotel} from '../store';
import {ResultsActionTypes} from '../actions/results';

describe('reducers/results', () => {
    const HOTELS: IHotel[] = [
        {name: 'foo', starRating: 1, facilities: ['a', 'b', 'c']},
        {name: 'bar', starRating: 5, facilities: ['a', 'c']},
        {name: 'foobar', starRating: 2, facilities: ['x', 'y', 'z']},
        {name: 'fizz', starRating: 3, facilities: ['a', 'x', 'c']},
        {name: 'buzz', starRating: 4, facilities: ['b', 'y', 'e']}
    ];

    it('getValidFilters() should return an array representing the set of unique facilities given a collection of hotels', () => {
        const validFilters = getValidFilters(HOTELS);

        expect(validFilters.join('')).toBe('abcxyze');
        expect(validFilters.join('')).not.toBe('abcexyz');
        expect(validFilters.length).toBe(7);
    });

    it('reducing GET_RESULTS_HOTELS actions returns a state matching the snapshot', () => {
        const newState = resultsReducer(
            {hotels: [], validFilters: []},
            {type: ResultsActionTypes.GET_RESULTS_HOTELS, payload: HOTELS}
        );

        expect(newState).toMatchSnapshot();
    });

    it('reducing an unrecognized action returns the state unchanged', () => {
        const oldState = {hotels: [], validFilters: []};

        const newState = resultsReducer(
            oldState,
            {type: 'YELL/LOUDLY' as any, payload: 'WOOOOOOOO' as any}
        );

        expect(newState).toMatchObject(oldState);
    });
});
