//Action Types
export const FETCH_INDUSTY_SAGA = 'FETCH_INDUSTY_SAGA'
export const GET_INDUSTY_SAGA = 'GET_INDUSTY_SAGA'
export const FETCH_INDUSTYID_SAGA = 'FETCH_INDUSTYID_SAGA'
export const GET_INDUSTYID_SAGA = 'GET_INDUSTYID_SAGA'
export const UPLOAD_INDUSTRY_SAGA = 'UPLOAD_INDUSTRY_SAGA'

//Action Creators

export const getIndustrySaga = (payload) => ({
    type : GET_INDUSTY_SAGA,
    payload
})

export const fetchIndustrySaga = (payload) => ({
    type : FETCH_INDUSTY_SAGA,
    payload
})

export const getIndustryIDSaga = (payload) => ({
    type : GET_INDUSTYID_SAGA,
    payload
})

export const fetchIndustryIDSaga = (payload) => ({
    type : FETCH_INDUSTYID_SAGA,
    payload
})

export const uploadIndustrySaga = (payload) => ({
    type : UPLOAD_INDUSTRY_SAGA,
    payload
})
