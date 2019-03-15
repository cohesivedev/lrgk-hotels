import * as React from 'react';
import {ChangeEventHandler, MouseEventHandler} from 'react';

import './FacilitiesFilter.css';

interface IFacilitiesFilterProps {
    validFilters: string[];
    activeFilters: string[]
    onChange: ChangeEventHandler;
    onClickClear: Function;
}

const FacilitiesFilter: React.FC<IFacilitiesFilterProps> = ({validFilters, activeFilters, onChange, onClickClear}) => (
    <div className="FacilitiesFilter">
        <div>
            Show me hotels that include
        </div>
        {validFilters.map(f => {
            const checked = activeFilters.includes(f);

            return (
                <label key={`FacilitiesFilter.${f}`} className={checked ? 'selected' : ''}>
                    {f}

                    <input
                        onChange={onChange}
                        type="checkbox"
                        data-filter={f}
                        checked={checked}
                    />
                </label>
            );
        })}
        <div className="actions">
            <button onClick={onClickClear as MouseEventHandler}>Clear all</button>
        </div>
    </div>
);

export default FacilitiesFilter;