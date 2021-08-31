import httpServices from '../../services/httpServices';

const loginUser = ({username, password}) => {
    return httpServices.postRequest('/users/login', {username, password});
}

const onLoginSucess = (token) => {
    localStorage.setItem('phonebook_token', token);
}

const loginService = { loginUser, onLoginSucess };

export default loginService;
