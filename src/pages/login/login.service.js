import httpServices from '../../services/httpServices';

const loginUser = ({username, password}) => {
    return httpServices.postRequest('/users/login', {username, password});
}

const loginService = { loginUser };

export default loginService;
