import httpService from '../../services/httpServices';

const getFavouriteContacts = (id) => {
    return httpService.getRequest(`/contacts/favourites`);
}

const getGraphData = (data) => {
    return httpService.postRequest('/contacts/graphData', data);
}

const dashboardService = {
    getFavouriteContacts,
    getGraphData,
}

export default dashboardService;