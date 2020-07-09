const setRecentlyViewedProducts = (product, array) => {
  let recentlyViewedArray = [...array];
  if (recentlyViewedArray.find(el => el.article === product.article)) {
    recentlyViewedArray = [...array];
  } else {
    if (recentlyViewedArray.length === 4) {
      recentlyViewedArray.push(product);
      recentlyViewedArray.shift();
    } else {
      recentlyViewedArray = [...array, product];
    }
  };
  return localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewedArray));
};

export default setRecentlyViewedProducts;