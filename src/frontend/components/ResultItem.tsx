import * as React from 'react';

import {IHotel} from '../store';

import './ResultItem.css';

interface IResultItemProps extends IHotel {
    filters: string[];
}

const SYMBOL_STAR_FULL  = '&#9733;';
const SYMBOL_STAR_EMPTY = '&#9734;';

const ResultItem: React.FC<IResultItemProps> = ({name, starRating, facilities, filters}) => (
    <tr className="ResultItem">
        <td>{name}</td>
        <td dangerouslySetInnerHTML={{__html: `${SYMBOL_STAR_FULL.repeat(starRating)}${SYMBOL_STAR_EMPTY.repeat(5 - starRating)}`}}/>
        <td>
            {facilities.map(f => (
                <div key={`ResultItem.${name}.${f}`} className={filters.includes(f) ? 'highlighted' : ''}>{f}</div>
            ))}
        </td>
    </tr>
);

export default ResultItem;