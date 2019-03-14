import * as React from 'react';
import {ChangeEventHandler} from 'react';

interface IFacilitiesFilterProps {
    validFilters: string[];
    activeFilters: string[]
    onChange: ChangeEventHandler;
}

const FacilitiesFilter: React.FC<IFacilitiesFilterProps> = ({validFilters, activeFilters, onChange}) => (
    <div>
        {validFilters.map(f => (
            <label key={`FacilitiesFilter.${f}`}>
                {f}

                <input
                    onChange={onChange}
                    type="checkbox"
                    data-filter={f}
                    checked={activeFilters.includes(f)}
                />
            </label>
        ))}
    </div>
);

export default FacilitiesFilter;