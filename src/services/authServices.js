import httpServices from './httpServices';

const forgotPassword = (data) => {
    return httpServices.postRequest('/users/forgot-password', data);
}

const authServices = {
    forgotPassword
}

export default authServices;
