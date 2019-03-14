import * as React from 'react';
import RatingSorter from './RatingSorter';
import {renderToString} from 'react-dom/server';

describe('components/RatingSorter', () => {
    it('should match snapshot for ascending',
        () => expect(
            renderToString(
                <RatingSorter
                    isAscending
                    onChange={new Function() as any}
                />
            )
        ).toMatchSnapshot()
    );

    it('should match snapshot for descending',
        () => expect(
            renderToString(
                <RatingSorter
                    isAscending={false}
                    onChange={new Function() as any}
                />
            )
        ).toMatchSnapshot()
    );
});
