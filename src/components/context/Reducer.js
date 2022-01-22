const Reducer = (state , action)=> {
    switch (action.type){
        case "UPDATE_NAME":
            return {
                ...state.userdata,
                name: action.name
            };
        case "UPDATE_USER":
            let userdata = {...state.userdata, ...action.payload}
            localStorage.setItem("userdata", JSON.stringify(userdata));
            console.log(userdata,"userdata from")
            return {
                ...state,
                userdata: userdata
            }
        case "SET_ACTIVE":
            return {
                ...state,
                active: action.active
            }
            default :
            return state;
    }
}
export default Reducer;