import * as React from 'react';

const FacilitiesFilter: React.FC<any> = ({filters}) => <div>{filters.join(',')}</div>;

export default FacilitiesFilter;