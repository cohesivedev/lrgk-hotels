import * as React from 'react';
import {ChangeEventHandler} from 'react';

import './RatingSorter.css';

interface IRatingSorterProps {
    isAscending: boolean;
    onChange: ChangeEventHandler;
}

const RatingSorter: React.FC<IRatingSorterProps> = ({isAscending, onChange}) => (
    <div className="RatingSorter">
        <label htmlFor="rating-sorter">
            Show me hotels by star rating
            <select id="rating-sorter" onChange={onChange} value={isAscending ? 'ascending' : 'descending'}>
                <option value="ascending">Low to High (Ascending)</option>
                <option value="descending">High to Low (Descending)</option>
            </select>
        </label>
    </div>
);

export default RatingSorter;