import Axios from 'axios';
import configRequests from '../utils/path';

const signInRequest = (loginOrEmail, password) => {
  return Axios.post(configRequests.login, {loginOrEmail, password});
};

const getCustomerRequest = (token) => {
  return Axios.get(configRequests.getCustomer, {
    headers:
    {Authorization: token}
  });
};

const registerRequest = async (firstName, lastName, login, email, password, telephone) => {
  const headers = {'Content-Type': 'application/json; charset=utf-8'};
  const newCustomer = {
    firstName: firstName,
    lastName: lastName,
    login: login,
    email: email,
    password: password,
    telephone: telephone
  };

  return await Axios.post(configRequests.register, newCustomer, headers);
};

export {
  signInRequest,
  getCustomerRequest,
  registerRequest
};