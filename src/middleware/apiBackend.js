import axios from 'axios';

export const getTokenAPI = ()=>{
    return axios.post('http://localhost:3000/apps/register')
        .then(r=>{
            return r
        })
        .catch(e=>{
            console.log(e)
        })
}

export const getIndustriesAPI = (token) =>{
    return axios.get('http://localhost:3000/industries/',{ headers: { authorization:token}})
        .then(r=>{
            return r
        })
        .catch(e=>{
            console.log(e)
        })
}

export const getIndustryAPI = (info) => {
    return axios.get(`http://localhost:3000/industries/${info.id}`,{ headers: { authorization:info.token}})
        .then(r=>{
            return r
        })
        .catch(e=>{
            console.log(e)
        })
}