import {createAction} from '.';

describe('actions/index', () => {
    it('createAction() should return a valid Action object', () => {
        const type = 'DRIVE/CAR';
        const car  = {id: 124};

        expect(createAction(type, car)).toMatchObject({
            type,
            payload: car
        });

        expect(createAction(type)).toMatchObject({type});
    });
});
