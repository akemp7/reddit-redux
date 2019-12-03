export default(state = {}, action) => {
    switch(action.type) {
        case 'NEW_POST':
        const { userName, content, id } = action;
        let newState = Object.assign({}, state, {
            [id] : {
                userName: userName, 
                content: content,
                id: id
            }
        });
        return newState;
    default:
        return state;
    }
};