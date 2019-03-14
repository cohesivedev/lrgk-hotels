import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import SearchView from './components/SearchView';

render(
    <Provider store={store}>
        <SearchView/>
    </Provider>,
    document.getElementById('searchView')
);