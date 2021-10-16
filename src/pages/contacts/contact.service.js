import httpService from '../../services/httpServices';

const getContactInfo = (id) => {
    return httpService.getRequest(`/contacts/${id}`);
}

const updateContact = (data) => {
    return httpService.putRequest(`/contacts/${data._id}`, data);
}

const contactService = {
    getContactInfo,
    updateContact,
}

export default contactService;