import {ActionCreatorsMapObject} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {IAppState} from '../store';

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

/*
    IActionPromise can return a thunk action containing
    - any (complicated promise types, actions, or dispatches)
    - IAppState (application state)
    - any (any final parameter)
 */
export type IActionPromise = ThunkAction<any, IAppState, any>;
