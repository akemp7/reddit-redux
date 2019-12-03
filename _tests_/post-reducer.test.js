import postreducer from './../src/reducers/post-reducer';

describe('postreducer', () => {
    let action;
    const fakePost = {
        userName: 'klsadjf',
        content: 'lorem ipsum',
        id: 0
    };

    test('Should return default state if no action type is recognized', () => {
        expect(postreducer({}, { type: null})).toEqual({});
    });
});