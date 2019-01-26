import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchTokenSaga,GET_TOKEN_SAGA} from '../actions/appActions'
import {UPLOAD_INDUSTRY_SAGA} from '../actions/industyActions'
import {getTokenAPI} from '../middleware/apiBackend'

function* getToken(){
    try{    
        const {data} =  yield call(getTokenAPI)
        yield put(fetchTokenSaga(data))
    }catch(e){
        console.log(e)
    }
}

function* uploadIndustry(){

}
function* loadToken(){
    yield takeEvery(GET_TOKEN_SAGA,getToken);
}
function* loadUpload(){
    yield takeEvery(UPLOAD_INDUSTRY_SAGA,uploadIndustry)
}
function* rootSaga() {
    yield all([
        loadToken(),
        loadUpload()
    ]);
}

export default rootSaga;