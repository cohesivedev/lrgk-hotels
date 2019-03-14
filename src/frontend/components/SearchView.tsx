import * as React from 'react';
import RatingSorter from './RatingSorter';
import ResultItem from './ResultItem';
import FacilitiesFilter from './FacilitiesFilter';

const SearchView: React.FC<any> = () => (
    <div>
        <FacilitiesFilter/>
        <RatingSorter/>
        <ResultItem/>
    </div>
);

export default SearchView;