let initialState = {
    auth: false,
    userType: '',
};

function authorization(state:object = initialState, action:any) {
    switch (action.type) {
        case 'SET_ROLE_TYPE':
            return {auth: true, userType: action.payload};
        case 'SET_LOG_OUT':
            return {auth: false, userType: ''};
        default:
            return state;
    }
}

export default authorization;
