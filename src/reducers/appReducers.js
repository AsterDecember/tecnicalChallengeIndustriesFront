import {
    FETCH_TOKEN_SAGA
} from "../actions/appActions";

const appData = (state = {
    app:{}
}, action) => {
    switch (action.type) {
        case FETCH_TOKEN_SAGA:
            const   token  = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,token}
        default:
            return state
    }
}

export default appData;