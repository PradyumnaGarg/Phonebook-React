import axios from 'axios';
let baseURL = '/api/persons'

const { REACT_APP_ENVTYPE } = process.env;

if (REACT_APP_ENVTYPE.trim() === 'dev') {
    baseURL = 'http://localhost:2000/api'
}

const getRequest = (path) => {
    const request = axios.get(`${baseURL}${path}`);
    return request.then(({data}) => data);
}

const postRequest = (path, body) => {
    const request  = axios.post(`${baseURL}${path}`, body);
    return request.then(({data}) => data);
}

const putRequest = (path, body) => {
    const request = axios.put(`${baseURL}${path}`, body);
    return request.then(({data}) => data);
}

const deleteRequest = (path, body) => {
    const request = axios.delete(`${baseURL}${path}`, body);
    return request.then(({data}) => data);
}

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

const create = (person) => {
    const request = axios.post(baseURL, person);
    return request.then(response => response.data);
}

const deleteEntry = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.status);
}

const update = (person) => {
    const request = axios.put(`${baseURL}/${person._id}`, person);
    return request.then(response => response.data);
}

const service = { getAll, create, deleteEntry, update, getRequest, postRequest, putRequest, deleteRequest }

export default service;