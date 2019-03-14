export function createAction<T extends string, P>(type: T, payload?: P) {
    const returnAction : { type: T, payload?: P, error?: true } = { type };

    if (typeof payload !== 'undefined') {
        returnAction.payload = payload;
    }

    return returnAction;
}
