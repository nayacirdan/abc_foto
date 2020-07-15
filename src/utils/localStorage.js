const setToLocalStorage = (product) => {
  if (localStorage.getItem('recentlyViewedProducts') !== null) {
    const localArray = JSON.parse(localStorage.getItem('recentlyViewedProducts'));

    if (localArray.find(el => el.article === product.article)) {
      return;
    } else {
      localArray.push(product);
      if (localArray.length === 5) {
        localArray.shift();
      }
    };
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(localArray));
  } else {
    const array = [];
    array.push(product);
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(array));
  }
};

export default setToLocalStorage;