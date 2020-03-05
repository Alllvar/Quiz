const initialState = {
    answers: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT':
            return {
                ...state, 
                answers: {
                    ...state.answers,
                    ...action.payload 
                }
            };
        default: return initialState;
    }
};

export default reducer;
