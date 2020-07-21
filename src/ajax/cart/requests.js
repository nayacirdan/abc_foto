import Axios from 'axios';
import configRequests from '../utils/path';

const addProductToLs = (product) => {
  debugger;
  let productCart = [];
  const existLocalCart = JSON.parse(localStorage.getItem('productCartLs'));

  if (existLocalCart !== null) {
    const lSCart = JSON.parse(localStorage.getItem('productCartLs'));
    lSCart.push(product);
    // Todo сделать проверку на такой же товар, если есть изменить количество
    localStorage.setItem('productCartLs', JSON.stringify(lSCart));
    productCart = JSON.parse(localStorage.getItem('productCartLs'));
  } else {
    productCart.push(product);
    localStorage.setItem('productCartLs', JSON.stringify(productCart));
    productCart = JSON.parse(localStorage.getItem('productCartLs'));
  }
  
  return productCart;
};

const addProductToDB = (product, token) => {
  return Axios.put(configRequests.addProd + product._id, null, {
    headers:
     {
       'Content-type': 'application/json',
       Authorization: token
     }
  });
};

const loadProdutcsToDb = (data, token) => {
  return Axios.post(configRequests.addProd, data, {
    headers:
         {
           'Content-type': 'application/json',
           Authorization: token
         }
  });
};

export {
  addProductToDB,
  addProductToLs,
  loadProdutcsToDb
};