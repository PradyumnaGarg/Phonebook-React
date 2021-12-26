import httpService from '../../services/httpServices';

const getFavouriteContacts = (id) => {
    return httpService.getRequest(`/contacts/favourites`);
}

const getGraphData = () => {
    return httpService.getRequest('/contacts/graphData');
}

const dashboardService = {
    getFavouriteContacts,
    getGraphData,
}

export default dashboardService;