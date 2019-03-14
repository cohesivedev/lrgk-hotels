import * as React from 'react';

import {IHotel} from '../store';

const ResultItem: React.FC<IHotel> = ({name, starRating, facilities}) => (
    <tr key={`ResultItem.${name}`}>
        <td>{name}</td>
        <td>{starRating}</td>
        <td>{facilities.map(f => <div key={`ResultItem.${name}.${f}`}>{f}</div>)}</td>
    </tr>
);

export default ResultItem;