import { combineReducers } from 'redux';
//import reducers
import appData from './appReducers'
import industryData from './industryReducers'

export default combineReducers({
    //export here
    appData,
    industryData
})