import httpService from '../../services/httpServices';

const getAllContacts = () => {
    return httpService.getRequest('/contacts');
}

const saveNewContact = (data) => {
    return httpService.postRequest('/contacts', data);
}

const deleteContact = (id) => {
    return httpService.deleteRequest(`/contacts/${id}`);
}

const getProfile = () => {
    return httpService.getRequest('/users/profile');
}

const changePassword = (data) => {
    return httpService.putRequest('/users/changePassword', data);
}

const homeService = {
    getAllContacts,
    saveNewContact,
    deleteContact,
    getProfile,
    changePassword
}

export default homeService;
