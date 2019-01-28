import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchTokenSaga,GET_TOKEN_SAGA} from '../actions/appActions'
import {UPLOAD_INDUSTRY_SAGA, GET_INDUSTY_SAGA,fetchIndustrySaga} from '../actions/industyActions'
import {getTokenAPI,getIndustriesAPI} from '../middleware/apiBackend'

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
function* getIndustries(info){
    try {
        const {data} = yield call(getIndustriesAPI,info.payload)
        //console.log('on saga :',data)
        yield put(fetchIndustrySaga(data))
    }catch(e) {
        console.log(e)
    }
}
function* loadToken(){
    yield takeEvery(GET_TOKEN_SAGA,getToken)
}
function* loadUpload(){
    yield takeEvery(UPLOAD_INDUSTRY_SAGA,uploadIndustry)
}
function* loadIndustries(){
    yield takeEvery(GET_INDUSTY_SAGA,getIndustries)
}
function* rootSaga() {
    yield all([
        loadToken(),
        loadUpload(),
        loadIndustries()
    ]);
}

export default rootSaga;