import axios from 'axios';
let baseURL = '/api'

const { REACT_APP_ENVTYPE } = process.env;

baseURL = 'http://localhost:2000/api'
// if (REACT_APP_ENVTYPE.trim() === 'dev') {
// }

const getAuthHeader = () => {
    const token = localStorage.getItem('phonebook_token') || null;
    return { Authorization: `Bearer ${token}` };
}

const getRequest = (path) => {
    const request = axios.get(`${baseURL}${path}`, { headers: getAuthHeader() });
    return request.then(({data}) => data);
}

const postRequest = (path, body) => {
    const request  = axios.post(`${baseURL}${path}`, body, { headers: getAuthHeader() });
    return request.then(({data}) => data);
}

const putRequest = (path, body) => {
    const request = axios.put(`${baseURL}${path}`, body, { headers: getAuthHeader() });
    return request.then(({data}) => data);
}

const deleteRequest = (path) => {
    const request = axios.delete(`${baseURL}${path}`, { headers: getAuthHeader() });
    return request.then(({status}) => status);
}

const service = { getRequest, postRequest, putRequest, deleteRequest }

export default service;