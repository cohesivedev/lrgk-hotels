import * as React from 'react';
import {ChangeEventHandler} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IAppState, IHotel} from '../store';
import {getHotels} from '../actions/results';
import {byAscendingStarRating, byDescendingStarRating, isSuperset} from '../helpers';

import RatingSorter from './RatingSorter';
import ResultItem from './ResultItem';
import FacilitiesFilter from './FacilitiesFilter';

interface ISearchViewProps {
    hotels: IHotel[];
    validFilters: string[];
}

interface ISearchViewStateProps {
    getHotels: Function;
}

interface ISearchViewState {
    isSortAscending: boolean;
    filters: string[];
}

class SearchView extends React.Component<ISearchViewProps & ISearchViewStateProps> {
    state: ISearchViewState = {
        isSortAscending: true,
        filters:         []
    };

    componentWillMount(): void {
        const {hotels, getHotels} = this.props;

        if (hotels.length === 0) {
            getHotels();
        }
    }

    onChangeRatingSort: ChangeEventHandler<HTMLSelectElement> = e => {
        this.setState({isSortAscending: e.currentTarget.value === 'ascending'});
    };

    render(): React.ReactNode {
        const {hotels, validFilters} = this.props;
        const {isSortAscending}      = this.state;

        const filtersSet = new Set(['pool', 'gym']);

        const results = hotels
            .filter(h => isSuperset(new Set(h.facilities), filtersSet))
            .sort(isSortAscending ? byAscendingStarRating : byDescendingStarRating)
            .map(ResultItem);

        return <>
            <FacilitiesFilter filters={validFilters}/>
            <RatingSorter isAscending={isSortAscending} onChange={this.onChangeRatingSort}/>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Star rating</th>
                    <th>Facilities</th>
                </tr>
                {results || 'No results found.'}
                </tbody>
            </table>
        </>
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getHotels
    }, dispatch)
);

export default connect<ISearchViewProps, ISearchViewStateProps, null>(
    ({results}: IAppState) => ({
        hotels:       results.hotels,
        validFilters: results.validFilters
    }),
    mapDispatchToProps
)(SearchView);
