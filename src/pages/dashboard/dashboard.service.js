import httpService from '../../services/httpServices';

const getFavouriteContacts = (id) => {
    return httpService.getRequest(`/contacts/favourites`);
}

const dashboardService = {
    getFavouriteContacts,
}

export default dashboardService;