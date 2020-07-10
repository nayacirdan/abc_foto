const setToLocalStorage = (product) => {
  console.log('Product', product);
  if (localStorage.getItem('recentlyViewedProducts') !== null) {
    const localArray = JSON.parse(localStorage.getItem('recentlyViewedProducts'));
    localArray.push(product);
    // console.log('LOCAL ARRAY', localArray.push(product));
    localStorage.removeItem('recentlyViewedProducts');
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(localArray));
  } else {
    const array = [];
    array.push(product);
    console.log('ARRAY', array);
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(array));
  }
};

export default setToLocalStorage;