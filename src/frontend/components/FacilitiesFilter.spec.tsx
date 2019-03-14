import * as React from 'react';
import FacilitiesFilter from './FacilitiesFilter';
import {renderToString} from 'react-dom/server';

describe('components/FacilitiesFilter', () => {
    it('should match snapshot',
        () => expect(
            renderToString(
                <FacilitiesFilter
                    validFilters={'ABC'.split('')}
                    activeFilters={'AC'.split('')}
                    onChange={new Function() as any}
                />
            )
        ).toMatchSnapshot()
    );
});
