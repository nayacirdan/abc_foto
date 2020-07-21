// todo после хостинга поменять на домен!!!
export const baseUrl = 'http://localhost:3000';

const configRequests = {
  login: `${baseUrl}/customers/login`,
  getCustomer: `${baseUrl}/customers/customer`,
  updateCustomer: `${baseUrl}/customers`,
  register: `${baseUrl}/customers/register`,
  password: `${baseUrl}/customers/password`,
  addProd: `${baseUrl}/cart/`
};

export default configRequests;