import axios from 'axios';
// let baseURL = 'http://localhost:2000/api/persons'
let baseURL = '/api/persons'

if (process.env.REACT_APP_ENVTYPE === "dev") {
    console.log('[HTTP] Env type', typeof(process.env.REACT_APP_ENVTYPE));
    baseURL = '/api/persons'
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

export default { getAll, create, deleteEntry, update };