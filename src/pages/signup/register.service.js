import httpServices from '../../services/httpServices';

const registerUser = ({username, password, mobileNumber, firstName, lastName}) => {
    return httpServices.postRequest('/users/register', {username, password, mobileNumber, firstName, lastName});
}

const registerService = { registerUser };

export default registerService;
