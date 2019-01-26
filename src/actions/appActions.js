//Action Types
export const FETCH_TOKEN_SAGA = 'FETCH_TOKEN_SAGA'
export const GET_TOKEN_SAGA = 'GET_TOKEN_SAGA'

//Action Creators

export const getTokenSaga = (payload) => ({
    type : GET_TOKEN_SAGA,
    payload
})

export const fetchTokenSaga = (payload) => ({
    type : FETCH_TOKEN_SAGA,
    payload
})