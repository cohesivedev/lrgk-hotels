import {Action} from 'redux';
import {IAppState} from '../store';

export default function reducers(state: IAppState, action: Action): IAppState {
    return {
        ...state
    };
}
