import {
    FETCH_INDUSTY_SAGA
} from "../actions/industyActions";

const industryData = (state = {
    app: {}
}, action) => {
    switch (action.type) {
        case FETCH_INDUSTY_SAGA:
            const industries = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state, industries }
        case FETCH_INDUSTYID_SAGA:
            const { industry } = action.payload
            return { ...state, industry }
        default:
            return state
    }
}

export default appData;