import axios from 'axios';

export const getTokenAPI = ()=>{

    return axios.post('http://localhost:3000/apps/register')
        .then(r=>{
            console.log(r)
            return r
        })
        .catch(e=>{
            console.log(e)
        })

}