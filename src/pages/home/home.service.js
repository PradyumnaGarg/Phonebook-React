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

const homeService = {
    getAllContacts,
    saveNewContact,
    deleteContact
}

export default homeService;
