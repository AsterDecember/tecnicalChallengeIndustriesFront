import {
    FETCH_INDUSTY_SAGA,FETCH_INDUSTYID_SAGA
} from "../actions/industyActions";

const industryData = (state = {
    industries: [],
    industry:{}
}, action) => {
    switch (action.type) {
        case FETCH_INDUSTY_SAGA:
            const industries = action.payload
            console.log('reducer FETCH saga',action.payload)
            return { ...state, industries }
        case FETCH_INDUSTYID_SAGA:
            const industry  = action.payload
            console.log('hey!')
            return { ...state, industry }
        default:
            return state
    }
}

export default industryData;