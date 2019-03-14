import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from '../reducers';
import SearchView from './SearchView';

describe('components/SearchView', () => {
    it('should match snapshot', () => {
        const fakeStore = createStore(
            reducers,
            {
                results: {
                    hotels:       [
                        {name: 'foo', starRating: 5, facilities: ['a']},
                        {name: 'bar', starRating: 2, facilities: ['b', 'c']}
                    ],
                    validFilters: []
                }
            }
        );

        expect(renderToString(
            <Provider store={fakeStore}>
                <SearchView/>
            </Provider>
        )).toMatchSnapshot();
    });
});
