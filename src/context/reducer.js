const Reducer = (state , action)=> {
    switch (action.type){
        case "UPDATE_NAME":
            return {
                ...state,
                name: action.name
            };
        case "UPDATE_USER":
            return {
                ...state,
                accessToken: action.accessToken
            }
            default :
            return state;
    }
}