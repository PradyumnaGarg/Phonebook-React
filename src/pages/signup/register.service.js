import httpServices from '../../services/httpServices';

const registerUser = ({username, password, mobileNumber}) => {
    return httpServices.postRequest('/users/register', {username, password, mobileNumber});
}

const registerService = { registerUser };

export default registerService;
