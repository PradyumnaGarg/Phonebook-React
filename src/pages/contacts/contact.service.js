import httpService from '../../services/httpServices';

const getContactInfo = (id) => {
    return httpService.getRequest(`/contacts/${id}`);
}

const contactService = {
    getContactInfo
}

export default contactService;