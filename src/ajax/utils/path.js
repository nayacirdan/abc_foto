// todo после хостинга поменять на домен!!!
export const baseUrl = 'http://codeandcatchfire.kiev.ua:5010';

const configRequests = {
  login: `${baseUrl}/customers/login`,
  getCustomer: `${baseUrl}/customers/customer`,
  updateCustomer: `${baseUrl}/customers`,
  register: `${baseUrl}/customers/register`,
  password: `${baseUrl}/customers/password`,
  addProd: `${baseUrl}/cart/`,
  loadCart: `${baseUrl}/cart`,
  deleteCartItem: `${baseUrl}/cart/`
};

export default configRequests;